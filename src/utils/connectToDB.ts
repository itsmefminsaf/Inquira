import { MongoClient } from "mongodb";

const connectToDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGO_DB_URI as string);
    return client;
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};

export default connectToDB;
