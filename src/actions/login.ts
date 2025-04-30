"use server";

import connectToDB from "@/utils/connectToDB";
import { redirect } from "next/navigation";
import createSession from "@/utils/createSession";
import { formStateType } from "@/types/login";
import checkPassword from "@/utils/checkPassword";

const login = async (
  previousState: formStateType,
  formData: FormData,
): Promise<formStateType> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const formState: formStateType = {
    states: { email, password },
  };

  try {
    const Users = (await connectToDB())?.db("auth").collection("users");

    const existingUser = await Users?.findOne({ email });

    if (!existingUser) {
      formState.error = "User not found";
      return formState;
    }

    const isPasswordCorrect = await checkPassword(
      existingUser.password,
      password,
    );

    if (!isPasswordCorrect) {
      formState.error = "Incorrect password";
      return formState;
    }

    await createSession(email);
  } catch (error) {
    console.log("Error signing up: ", error);
    formState.error = "Something went wrong";
    return formState;
  }

  redirect("/dashboard");
};

export default login;
