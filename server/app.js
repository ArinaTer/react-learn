require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const authRoutes = require('./routes/auth')
const authMiddleware = require('./middleware/authMiddleware');;

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


app.use('/api/auth', authRoutes);

app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Это защищенный маршрут', user: req.user });
});

const PORT = 5001

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
