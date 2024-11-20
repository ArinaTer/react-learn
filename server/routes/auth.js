const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

const generateToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1d' });
};

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Проверяем жестко заданные значения email и password
    if (email === "test@gmail.com" && password === "12345678") {
        // Генерируем JWT токен
        const token = generateToken(email);

        // Устанавливаем токен в куки
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Используем secure только в production
            maxAge: 24 * 60 * 60 * 1000 // 1 день
        });

        // Отправляем токен в ответе (для использования в localStorage)
        res.json({
            status: 'success',
            message: 'Login successful',
            token,
        });
    } else {
        res.status(401).json({ status: 'error', message: 'Invalid email or password' });
    }
});

// Проверка авторизации
router.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: 'Welcome!', email: req.user.email });
});

// Выход
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out successfully' });
});

module.exports = router;