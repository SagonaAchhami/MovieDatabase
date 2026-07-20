import * as AuthModel from '../models/authModel.js';
export async function registerUser(req, res) {
    const user = await AuthModel.register(req.body);
    if(user){
        return res
        .status(201)
        .json({ message: 'User registered successfully', user });
    }
    if(!user){
        return res
        .status(400)
        .json({ message: 'User registration failed' });
    }
}
export async function loginUser(req, res) {
    const user = await AuthModel.login(req.body);
    if(user){
        return res
        .status(200)
        .json({ message: 'User logged in successfully', user });
    }
    if(!user){
        return res
        .status(400)
        .json({ message: 'User login failed' });
    }
}
