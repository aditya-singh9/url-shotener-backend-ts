import mongoose from "mongoose";
import * as dotenv from "dotenv";

async function connect() {
  dotenv.config();
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASS;
  
  const dbUri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.njc5spi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    await mongoose.connect(dbUri);
    console.log("DB connected");
  } catch (error) {
    console.log("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
