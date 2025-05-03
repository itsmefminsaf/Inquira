import crypto from "crypto";
import redis from "./redis";
import { cookies } from "next/headers";

const createSession = async (email: string) => {
  try {
    const session_id = crypto.randomBytes(512).toString("hex").normalize();

    redis.set(session_id, email, { ex: 60 * 60 * 24 * 7 });
    (await cookies()).set("session_id", session_id);
  } catch (error) {
    console.log("Error creating session: ", error);
  }
};

export default createSession;
