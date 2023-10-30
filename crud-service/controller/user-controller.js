import User from '../model/user.js';
import createSecretToken from '../util/SecretToken.js';
import bcryptjs from 'bcryptjs';
// Get all users
export const getUsers = async(request, response) => {
    try {
        const users = await User.find();
        response.status(200).json(users);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

// Save data of the user in database
export const addUser = async(request, response, next) => {
    const { name, username, email, password } = request.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return response.json({ message: "El usuario ya existe", success: false });
    }
    const user = request.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        const token = createSecretToken(newUser._id);
        response.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        next()
        response.status(201).json({ message: "Usuario agregado exitosamente", success: true, newUser });
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

// Get a user by id
export const getUserById = async(request, response) => {
    try {
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editUser = async(request, response) => {
    let user = request.body;

    const editUser = new User(user);
    try {
        await User.updateOne({ _id: request.params.id }, editUser);
        response.status(201).json({ message: "Usuario editado exitosamente", success: true, editUser });
    } catch (error) {
        response.status(409).json({ message: error.message, success: false });
    }
}

// deleting data of user from the database
export const deleteUser = async(request, response) => {
    try {
        await User.deleteOne({ _id: request.params.id });
        response.status(201).json({ message: "Usuario eliminado exitosamente", success: true });
    } catch (error) {
        response.status(409).json({ message: error.message, success: false });
    }
}