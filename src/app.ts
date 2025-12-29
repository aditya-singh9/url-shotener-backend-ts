import express from "express";
import * as dotenv from "dotenv";
import routes from "./routes";
import connect from "./db";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";

dotenv.config();
const app = express();


app.use(
  cors({
    origin: "https://limurl.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("*", cors()); // 🔥 REQUIRED


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(helmet());
app.use(mongoSanitize());

app.use(
  rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP. Please try again later!",
  })
);


routes(app);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  connect();
});
