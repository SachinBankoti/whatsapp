import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async () => {
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-lozpwc8-shard-00-00.yp8dc0g.mongodb.net:27017,ac-lozpwc8-shard-00-01.yp8dc0g.mongodb.net:27017,ac-lozpwc8-shard-00-02.yp8dc0g.mongodb.net:27017/?replicaSet=atlas-p7loih-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database successfully connected");
  } catch (error) {
    console.log("Database not connected", error.message);
  }
};
export default Connection;
