import bcrypt from 'bcrypt'
import User from '../../data/user.js'

export async function register(email, password) {
  return User.create({
    email,
    password,
  });
}
export async function login({ email, password }) {
  const user = await User.findOne({ email })
  console.log(user.password)
  if (!user) {
    throw new Error('User not found')
  }
  const isValid = await bcrypt.compare(password, user.password)
  return isValid ? user : null
}