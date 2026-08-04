import * as AuthModel from "../models/authModel.js";
import { generateToken } from "../utils/auth.js";
import { getUserById } from "../models/authModel.js";

const cookieOptions = {
  httpOnly: true,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  secure: process.env.NODE_ENV === "production",
};

export async function registerUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await AuthModel.register(email, password);

    if (!user) {
      return res.status(400).json({
        message: "User registration failed",
      });
    }

    const token = generateToken(user);

    res.cookie("jwt-token", token, cookieOptions);

    return res.status(201).json({
      message: "User registered successfully",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

export async function loginUser(req, res) {
  try {
    const user = await AuthModel.login(req.body);

    if (!user) {
      return res.status(400).json({
        message: "User login failed",
      });
    }

    const token = generateToken(user);

    res.cookie("jwt-token", token, cookieOptions);

    return res.status(200).json({
      message: "User logged in successfully",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

export async function getCurrentUser(req, res) {
  try {
    const user = await getUserById(req.user._id);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    return res.status(200).json({
      data: {
        _id: user._id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

export function logoutUser(req, res) {
  res.clearCookie("jwt-token", cookieOptions);

  return res.status(200).json({
    message: "User logged out successfully",
  });
}