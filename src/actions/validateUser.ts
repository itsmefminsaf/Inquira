import { cookies } from "next/headers";

const validateUser = async () => {
  try {
    const session_id = (await cookies()).get("session_id");
    if (!session_id) return false;
    return true;
  } catch (error) {
    console.log("Error validating user", error);
  }
};

export default validateUser;
