require('dotenv').config();
const bcrypt = require('bcrypt');

const router = require('express').Router();
const { Op } = require('sequelize');
const { User } = require('../db/models');

const Login = require('../views/Login');
const Registration = require('../views/Registration');

router.get('/registration', (req, res) => {
  try {
    res.renderComponent(Registration, { title: 'Registration page' });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post('/registration', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const candidate = await User.findOne({ where: { name } });
    const candidate1 = await User.findOne({ where: { email } });

    if (!name && !email && !password) {
      res.status(400).json({
        message: 'Пусто - заполни',
      });
      return;
    }

    if (candidate) {
      res.status(400).json({
        message: 'Пользователь с таким Loginom уже существует',
      });
      return;
    }

    if (password.length < 3) {
      res.status(400).json({
        message: 'Пароль должен быть более 8 символов',
      });
      return;
    }

    if (name[0] !== name[0].toUpperCase()) {
      res.status(400).json({
        message: 'Имя должно быть с заглавной буквы',
      });
      return;
    }

    if (candidate1) {
      res.status(400).json({
        message: 'Пользователь с таким email уже существует',
      });
      return;
    }

    const passwordHash = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS)
    );
    const newUser = await User.create({
      name,
      email,
      password: passwordHash,
    });

    req.session.userId = newUser.id;

    res.json({ reg: true });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get('/login', (req, res) => {
  try {
    res.renderComponent(Login, { title: 'Login page' });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post('/login', async (req, res) => {
  try {
    const hasLogin = Boolean(req.body.name);
    const hasPassword = Boolean(req.body.password);
    if (!hasLogin || !hasPassword) {
      res.status(400).json({
        message: 'Введите логин и пароль',
      });
      return;
    }
    const { name } = req.body;
    const user = await User.findOne({
      where: {
        [Op.or]: [{ name }, { email: name }],
      },
    });

    if (!user) {
      res
        .status(400)
        .json({ message: 'Нет пользователя с таким логином или паролем' });
      return;
    }

    const rawPassword = req.body.password; // пароль введенный админом в инпут
    const dataBasePassword = user.password; // хэшированный пароль, ранее внесенный в БД
    const isSame = await bcrypt.compare(rawPassword, dataBasePassword);

    if (!isSame) {
      res
        .status(400)
        .json({ message: 'Нет пользователя с таким логином или паролем' });
      return;
    }

    req.session.userId = user.id;
    res.redirect('/');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.clearCookie('user_sid');
    res.json({ delete: true });
  });
});

module.exports = router;