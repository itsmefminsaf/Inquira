"use server";

import { formStateType } from "@/types/sign-up";
import connectToDB from "@/utils/connectToDB";
import hashPassword from "@/utils/hashPassword";
import { redirect } from "next/navigation";
import createSession from "@/utils/createSession";

const signUp = async (
  previousState: formStateType,
  formData: FormData,
): Promise<formStateType> => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  const formState: formStateType = {
    states: { name, email, password, confirmPassword },
  };

  try {
    if (password !== confirmPassword) {
      formState.error = "Passwords must be same";
      return formState;
    }

    const Users = (await connectToDB())?.db("auth").collection("users");

    const existingUser = await Users?.findOne({ email });

    if (existingUser) {
      formState.error = "Email already used. Try login";
      return formState;
    }

    const { hash, salt } = await hashPassword(password);

    await Users?.insertOne({ name, email, password: { hash, salt } });

    await createSession(email);
  } catch (error) {
    console.log("Error signing up: ", error);
    formState.error = "Something went wrong";
    return formState;
  }

  redirect("/dashboard");
};

export default signUp;
