require('dotenv').config()

const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send();
  }

  try {
    const emailAvaibility = await User.findOne({ where: { email } });
    if (emailAvaibility) {
      return res.status(409).send('Email not available');
    }

    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS, 10);
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    const newUser = {
      email,
      password: hash,
    };

    const user = await User.create(newUser);
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: '3 hours' }
    );

    res.status(200).send({ tokenId: token, user });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).send();
    }

    const isSamePassword = await bcrypt.compare(password, user.password);

    if (!isSamePassword) {
      return res.status(401).send();
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: '3 hours' }
    );

    res.status(200).send({ token, user });
  } catch (error) {
    res.status(401).send({});
  }
};

const remove = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.status(200).send([]);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  signup,
  signin,
  remove,
};

