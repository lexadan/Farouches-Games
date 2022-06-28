import express from 'express';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import socketIo from 'socket.io';

dotenv.config();

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send(`Application works!,`);
});

app.listen(3000, () => {
    console.log('Application started on port 3000!');
});