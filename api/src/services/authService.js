import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { findUserByEmail, updateUser } from '../data/userData.js';
import generateToken from '../utils/token.js';
import transport from './mailerService.js';

export async function authenticate(email, password) {
  try {
    const user = await findUserByEmail(email);
    console.log(user)
    if (user.error) return { error: user.error };

    if (!(await bcrypt.compare(password, user.password)))
      return { error: 'Invalid password' };

    user.password = '';

    return {
      user,
      token: await generateToken({ id: user.id }),
    };
  } catch (error) {
    return error;
  }
}

export async function forgotPassword(email) {
  const user = await findUserByEmail(email);
  if (!user) return { error: user.error };

  const token = crypto.randomBytes(20).toString('hex');
  const now = new Date();
  now.setHours(now.getHours() + 1);

  const updatedUser = await updateUser(user.id, {
    passwordResetToken: token,
    passwordResetExpires: now,
  });
  if (updatedUser.error) return { error: updatedUser.error };

  await transport.sendMail(
    {
      from: 'jcmartins81@outlook.com',
      to: email,
      subject: 'Forgot Password?',
      template: 'auth/forgot_password',
      context: { token },
    },
    (err) => ({ error: 'Cannot send forgot password email' })
  );

  return {
    message: 'Email sent successfully! Check your inbox!',
  };
}
