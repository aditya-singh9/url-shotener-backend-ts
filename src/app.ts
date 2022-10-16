import express from "express";
import * as dotenv from "dotenv";
import routes from "./routes";
import bodyParser from "body-parser";
import connect from "./db";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import { Request, Response } from "express";

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());
const port = process.env.PORT || 4000;

//Security Middlewares
app.use(helmet());

app.use(mongoSanitize()); //Against NoSQL Query Injection

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 100,
  message: "Too many requests from this IP. Please try again later!",
});

app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Listening at https://localhost:${port}`);
  routes(app);
  connect();
});
