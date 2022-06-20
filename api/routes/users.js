import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyUser } from '../utils/VerifyToken.js';

const router = express.Router();

// Update
router.put('/:id', verifyUser, updateUser);
//delete
router.delete('/:id', verifyUser, deleteUser);
//Get single User details
router.get('/:id', verifyUser, getUser);
// Get all Users
router.get('/', verifyAdmin, getUsers);

export default router;