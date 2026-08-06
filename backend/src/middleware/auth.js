import { verifyToken } from "../utils/auth.js";

const authenticate = (req, res, next) => {
  const headerToken = req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.split(" ")[1]
    : null;

  const token = req.cookies?.["jwt-token"] || headerToken;

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