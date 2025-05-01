import { cookies } from "next/headers";
import redis from "./redis";
import connectToDB from "./connectToDB";

const getUserName = async () => {
  try {
    const session_id = (await cookies()).get("session_id")?.value;
    if (!session_id) return null;

    const email = await redis.get(session_id);
    if (!email) return null;

    const Users = (await connectToDB())?.db("auth").collection("users");

    const user = await Users?.findOne({ email });

    return user?.name;
  } catch (error) {
    console.log("Error getting user name: ", error);
    return;
  }
};

export default getUserName;
