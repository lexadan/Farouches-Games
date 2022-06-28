import express from 'express';
import 'dotenv/config'
import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send(`Application works!`);
});

app.listen(process.env.PORT, () => {
    console.log('Application started on port 3000!');
});