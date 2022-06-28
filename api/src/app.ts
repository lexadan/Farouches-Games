import express, { Application, Request, Response, NextFunction } from "express"
import bodyParser from "body-parser"
import { Pool } from "pg";
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432")
});


const connectToDB = async () => {
    try {
        await pool.connect();
        console.log('cconnecté');
    } catch (err) {
        console.log(err);
    }
    };

connectToDB();

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req: Request, res: Response) => {
    res.send("TS App is Running, enfin ffs")
})
const PORT = 3000

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})