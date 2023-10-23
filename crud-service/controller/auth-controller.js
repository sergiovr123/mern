import User from '../model/user.js';
import createSecretToken from '../util/SecretToken.js';
import bcrypt from 'bcryptjs';

export const login = async(request, response) => {
    try {
        const { email, password } = request.body;
        if (!email || !password) {
            return response.json({ message: 'All fields are required' })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return response.json({ message: 'Incorrect password or email' })
        }
        const auth = password == user.password
        if (!auth) {
            return response.json({ message: 'Incorrect password or email' })
        }
        const token = createSecretToken(user._id);
        response.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        response.status(201).json({ message: "User logged in successfully", success: true });
        //next()
    } catch (error) {
        console.error(error);
    }
}