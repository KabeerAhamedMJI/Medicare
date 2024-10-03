import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import apiRouter from './routes/index.js'
import { connectDB } from './config/dbConfig.js'
import cookieParser from 'cookie-parser'


const port = 3500
const app = express()


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: `https://medicareclient-dun.vercel.app`,
  credentials: true, 
}));

connectDB();

app.use("/api", apiRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.all("*", (req, res, next) => {
    res.status(404).json({ message: "end point does not exist" });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

