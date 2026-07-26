import { verifyToken } from "../utils/auth.js";

const authenticate = (req,res,next)=>{
    const token = req.header.authorization
    if (!token || !token.startsWith('Bearer ')) return res.status(401).json({error:'Unauthorized'})
     const isValid = verifyToken(token)
    if (!token) return res.status(401).json({error:'Invalid Token'})
        next()
}
export default authenticate