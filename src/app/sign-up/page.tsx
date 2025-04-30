"use client";

import signUp from "@/actions/sign-up";
import { formStateType } from "@/types/sign-up";
import Link from "next/link";
import { useActionState } from "react";

const SignUp = () => {
  const initialFormState: formStateType = {};

  const [formState, action, isPending] = useActionState(
    signUp,
    initialFormState,
  );

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <form action={action} className="flex flex-col gap-3 p-10">
        <div className="flex w-fit items-center justify-center gap-3 rounded-2xl bg-black px-4 py-3 font-extrabold text-white">
          <h1 className="text-4xl">Inquira</h1>
          <hr className="h-5 w-0.5 rounded-full bg-white" />
          <h2 className="text-2xl">Sign up to continue</h2>
        </div>
        <label className="form-input-label" htmlFor="name">
          Name:
        </label>
        <input
          className="form-input"
          id="name"
          type="text"
          name="name"
          placeholder="Ex: John Doe"
          defaultValue={formState.states?.name}
          autoFocus
          required
        />
        <label className="form-input-label" htmlFor="email">
          E-mail:
        </label>
        <input
          className="form-input"
          id="email"
          type="email"
          name="email"
          placeholder="Ex: yourname@email.com"
          defaultValue={formState.states?.email}
          required
        />
        <label className="form-input-label" htmlFor="password">
          Password:
        </label>
        <input
          className="form-input"
          id="password"
          type="password"
          name="password"
          placeholder="Ex: ********"
          defaultValue={formState.states?.password}
          required
        />
        <label className="form-input-label" htmlFor="confirmPassword">
          Confirm password:
        </label>
        <input
          className="form-input"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Ex: ********"
          defaultValue={formState.states?.confirmPassword}
          required
        />
        <p className="form-error-text">{formState?.error}</p>
        <div className="flex items-center justify-center gap-3">
          <input
            type="submit"
            value={`${isPending ? "Please wait" : "Continue"}`}
            className={`${isPending ?? "cursor-progress"} form-submit-btn`}
            disabled={isPending}
          />
          <hr className="h-5 w-0.5 rounded-full bg-black" />
          <Link href={"/login"} className="text-lg font-bold">
            Login
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
