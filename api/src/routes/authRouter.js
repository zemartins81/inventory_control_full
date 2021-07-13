import express from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import dotenv from 'dotenv';
import User from '../database/models/user.js';

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
    const { email } = req.body;
    if (await User.findOne({ email }))
      return res.status(400).send({ error: 'User already exists' });

    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({ user, token: generateToken({ id: user.id }) });
  } catch (e) {
    return res.status(400).send({ error: 'Registration failed' });
  }
});

authRouter.post('/authenticate', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    console.log({ user });
    if (!user) return res.status(400).send({ error: 'User not found' });

    if (!(await bcryptjs.compare(password, user.password)))
      return res.status(400).send({ error: 'Invalid access data' });

    user.password = undefined;

    return res.send({ user, token: generateToken({ id: user.id }) });
  } catch (e) {
    return res.status(400).send(e);
  }
});

export default authRouter;
