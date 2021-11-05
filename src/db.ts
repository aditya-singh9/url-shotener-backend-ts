import mongoose from "mongoose";
import * as dotenv from "dotenv";

async function connect() {
  dotenv.config();
  const dbName = process.env.DB_NAME;
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASS;

  const dbUri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.dqlzp.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(dbUri);
    console.log("DB connected");
  } catch (error) {
    console.log("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
