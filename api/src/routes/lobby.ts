import { Socket } from 'socket.io';
import joinGame from '../controllers/lobby/joinGame';
import newGame from '../controllers/lobby/newGame';
import express from 'express';

// WS

export function setLobbyListener(socket: Socket) {
    socket.on('new game', (msg) => {newGame(socket, msg)});
    socket.on('join game', (msg) => {joinGame(socket, msg)})
}


// HTTP

const routeur  = express.Router();

routeur.get('/lobby');

export default routeur;