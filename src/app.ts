import express from "express";
import * as dotenv from "dotenv";
import routes from "./routes";
import bodyParser from "body-parser";
import connect from "./db";

dotenv.config();
const app = express();

app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening at https://localhost:${port}`);
  routes(app);
  connect();
});
