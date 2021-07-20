import express, { request, response } from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import dotenv from 'dotenv';
import crypto from 'crypto';
// eslint-disable-next-line import/extensions
import User from '../database/models/user.js';
// eslint-disable-next-line import/extensions
import mailerService from '../services/mailerService.js';

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

    return res.send({ user, token: generateToken({ id: user._id }) });
  } catch (e) {
    return res.status(400).send({ error: 'Registration failed' });
  }
});

authRouter.post('/authenticate', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) return res.status(400).send({ error: 'User not found' });

    if (!(await bcryptjs.compare(password, user.password)))
      return res.status(400).send({ error: 'Invalid access data' });

    user.password = undefined;

    return res.send({ user, token: generateToken({ id: user.id }) });
  } catch (e) {
    return res.status(400).send(e);
  }
});

// eslint-disable-next-line consistent-return
authRouter.post('/forgot_password', async (request, response) => {
  try {
    const { email } = request.body;
    const user = await User.find({});

    if (!user) return response.status(400).send({ error: 'User not found' });

    const token = crypto.randomBytes(20).toString('hex');

    const now = new Date();
    now.setHours(now.getHours() + 1);

    await User.findByIdAndUpdate(user.id, {
      $set: {
        passwordResetToken: token,
        passwordResetExpires: now,
      },
    });

    await mailerService.sendMail(
      {
        to: email,
        from: 'jcmartins81@outlook.com',
        subject: 'Forgot Password?',
        template: 'auth/forgot_password',
        context: { token },
      },
      (err) => {
        if (err)
          console.log(err)
          return response
            .status(400)
            .send({ error: 'Cannot send forgot password email', err });

        return response.send();
      }
    );
  } catch (e) {
    response.status(400).send({ error: 'Error on forgot password, try again' });
  }
});

export default authRouter;
