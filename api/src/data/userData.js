import User from '../database/models/user.js';

export async function findUserById(id) {
  try {
    const user = User.findById(id);
    if (!user) return { error: 'User not found!' };
    return user;
  } catch (error) {
    return { error: 'Could not perform the query in the Database' };
  }
}

export async function create(user) {
  try {
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser)
      return { error: 'There is already a user with this email in the system' };
    const newUser = User.create(user);
    if (!newUser) return { error: 'Could not register the user' };
    newUser.password = '';
    return newUser;
  } catch (error) {
    return { error: 'Could not register the user' };
  }
}

export async function findUserByEmail(email) {
  try {
    const user = await User.findOne({email});
    if (!user.email) return { error: 'User not found!' };
    return user;
  } catch (error) {
    return { error: 'Could not perform the query in the Database' };
  }
}

export async function updateUser(id, params) {

  const result = await User.findByIdAndUpdate(id, { ...params })

  console.log(result)

    return result
}
