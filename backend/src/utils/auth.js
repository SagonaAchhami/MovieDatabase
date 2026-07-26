import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
    path:'./.env',
});
const JWT_SECRET = process.env.JWT_SECRET || 'bzQ5FlGdyt5F3TpsTsIPVmX4Lo2fVz743W5nZdRYJLr';
export const generateToken = (user) => {
    return jwt.sign( 
        {userId: user._id, isAdmin:user.isAdmin},JWT_SECRET,{ expiresIn: '7d' }
    )}
    export const verifyToken = (Token) => {
            return jwt.verify(Token,JWT_SECRET); 
    }