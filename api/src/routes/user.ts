import express from 'express';
import { deleteUser, getAllUsers } from '../controllers/users';

const routeur  = express.Router();

routeur.get('/', getAllUsers);

routeur.delete('/:discordId', deleteUser);


export default routeur;