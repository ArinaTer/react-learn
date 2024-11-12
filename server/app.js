const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);  // Добавьте это для отладки
  if (email === "test@gmail.com" && password === "12345678") {
    res.json({ status: 'success', message: 'Login successful' });
  } else {
    res.status(401).json({ status: 'error', message: 'Invalid email or password' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});