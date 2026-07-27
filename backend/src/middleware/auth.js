import { verifyToken } from "../utils/auth.js";

const authenticate = (req, res, next) => {
  const token = req.cookies?.["jwt-token"];

  if (!token) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({
      error: "Invalid Token",
    });
  }

  req.user = decoded;
  next();
};

export default authenticate;