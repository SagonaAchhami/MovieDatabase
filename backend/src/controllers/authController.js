import * as AuthModel from "../models/authModel.js";
import { generateToken } from "../utils/auth.js";


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

    return res.status(201).json({
      message: "User registered successfully",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token,
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

    return res.status(200).json({
      message: "User logged in successfully",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token,
      },
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}