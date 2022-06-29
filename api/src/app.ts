import express, { Application, Request, Response, NextFunction } from "express"
import bodyParser from "body-parser"
import { PrismaClient } from "@prisma/client";
import baseRouteur from './routes/base';
import userRouteur from './routes/user';

const prisma = new PrismaClient();
const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req: Request, res: Response) => {
    res.send("TS App is Running, enfin ffs")
})

app.use('/v1', baseRouteur);
app.use('/v1/users', userRouteur);

const PORT = 3000

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})