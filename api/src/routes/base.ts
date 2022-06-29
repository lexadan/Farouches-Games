import express from 'express';
import { connect } from '../controllers/base';

const routeur  = express.Router();

routeur.post('/connect', connect);

export default routeur;