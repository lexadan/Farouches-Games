import express from 'express';
import 'dotenv/config'
import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send(`Application works!, ${process.env.LOCAL}`);
});

app.listen(3000, () => {
    console.log('Application started on port 3000!');
});