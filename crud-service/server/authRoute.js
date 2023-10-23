import express from 'express';
import { login } from '../controller/auth-controller.js';
import { userVerification } from '../middleware/AuthMiddleware.js';

const loginRoute = express.Router();
loginRoute.post('/', userVerification)
loginRoute.post('/login', login)

export default loginRoute;