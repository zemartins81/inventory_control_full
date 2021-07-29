import express from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import dotenv from 'dotenv';

import User from '../database/models/user.js';

import { authenticate, forgotPassword } from '../services/authService.js';
import { createUser } from '../services/userService.js';

const { resolve, join } = path;

dotenv.config({
  path: join(resolve(), './src/config/', '.env'),
});

const authRouter = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, process.env.AUTH_SECRET, {
    expiresIn: 600,
  });
}

authRouter.post('/register', async (req, res) => {
  try {
    const result = await createUser(req.body);

    if (result.error) return res.status(400).send({ error: result.error });

    const { _id } = result;

    return res.send({ user: result, token: generateToken({ id: _id }) });
  } catch (e) {
    return res.status(400).send({ error: 'Registration failed' });
  }
});

authRouter.post('/authenticate', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authenticate(email, password);
    if (result.error) return res.status(400).send({ error: result.error });
    return res.send({ user: result });
  } catch (e) {
    return res.status(400).send(e);
  }
});

// eslint-disable-next-line consistent-return
authRouter.post('/forgot_password', async (req, res) => {
  try {
    const result = await forgotPassword(req.body);
    if (result.error) return res.status(400).send({ error: result.error });
    return res.send({ result });
  } catch (e) {
    res.status(400).send({ error: 'Error on forgot password, try again' });
  }
});

// TODO terminar de ajustar esta função
authRouter.post('/reset_password', async (req, res) => {
  try {
    const { email, token, password } = req.body;

    const user = await User.findOne({ email }).select(
      '+passwordResetToken passwordResetExpires'
    );

    if (!user) return res.status(400).send({ error: 'User not found' });

    if (token !== user.passwordResetToken)
      return res.status(400).send({ error: 'Token invalid' });

    const now = new Date();

    if (now > user.passwordResetExpires)
      return res
        .status(400)
        .send({ error: 'Token expired, generate a new one' });

    user.password = password;

    await user.save();

    res.send();
  } catch (err) {
    res.status(400).send({ error: 'Cannot reset password, try again' });
  }
});

export default authRouter;
