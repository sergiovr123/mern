import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser } from '../controller/user-controller.js';

const router = express.Router();

router.get('/users', getUsers);
router.post('/users/add', addUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

export default router;