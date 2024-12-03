require('dotenv').config()
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

const SECRET_KEY = process.env.JWT_SECRET;


const validUser = { email: 'test@gmail.com', password: '12345678' };

router.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    if (email === validUser.email && password === validUser.password) {
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
  
      res.cookie('token', token, {
        httpOnly: true, // Доступно только серверу
        sameSite: 'lax',
      });
      return res.json({ status: 'success', message: 'Авторизация успешна!' });
    } else {
      return res.status(401).json({ status: 'error', message: 'Неправильный логин или пароль' });
    }
  });

// Проверка авторизации
router.get('/me', (req, res) => {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ status: 'error', message: 'Не авторизован' });
    }
  
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return res.json({ status: 'success', user: decoded });
    } catch (error) {
      return res.status(401).json({ status: 'error', message: 'Токен недействителен' });
    }
  });
  

// Выход
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({ status: 'success', message: 'Вы вышли из системы' });
  });

module.exports = router;