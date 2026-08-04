import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "bzQ5FlGdyt5F3TpsTsIPVmX4Lo2fVz743W5nZdRYJLr";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      isAdmin: user.isAdmin,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};