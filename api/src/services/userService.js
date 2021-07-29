import { create, findUserByEmail, updateUser } from '../data/userData.js';

export async function resetPassword(email, token, password) {
  try {
    const user = await findUserByEmail(email);

    if (user.error) return { error: 'User not Found!' };

    if (token !== user.passwordResetToken) return { error: 'Token invalid' };

    const now = new Date();
    if (now > user.passwordResetExpires)
      return { error: 'Token expired, try again' };

    return await updateUser(user.id, { password });
  } catch (error) {
    return { error };
  }
}

export async function createUser(newUser) {
  try {
    const user = await create(newUser);

    if (user.error) return { error: user.error };

    return user;
  } catch (error) {
    return error;
  }
}
