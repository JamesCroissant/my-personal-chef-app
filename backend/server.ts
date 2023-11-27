import express, { Express, Request, Response } from 'express';
import "dotenv/config";
import cors from 'cors';
import bodyParser from 'body-parser';
import authRouter from './routes/auth';
import userRouter from './routes/user';

const app: Express = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Hello!");
});

app.listen(port, () => console.log(`Server running on port ${port}`));