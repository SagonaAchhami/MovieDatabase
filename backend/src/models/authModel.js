import bcrypt from "bcryptjs";
import user from "../../data/user.js";

export async function register(userDetails) {
  return await user.create(userDetails);
}

export async function login(userDetails) {
  const existingUser = await user.findOne({
    email: userDetails.email,
  });

  if (!existingUser) {
    return null;
  }

  const isValid = await bcrypt.compare(
    userDetails.password,
    existingUser.password
  );

  return isValid ? existingUser : null;
}