import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();

const port = process.env.PORT || 300;

app.listen(port, () => {
  console.log(`Listening at https://localhost:${port}`);
});
