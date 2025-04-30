"use client";

import login from "@/actions/login";
import { formStateType } from "@/types/login";
import Link from "next/link";
import { useActionState } from "react";

const Login = () => {
  const initialFormState: formStateType = {};

  const [formState, action, isPending] = useActionState(
    login,
    initialFormState,
  );

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <form action={action} className="flex flex-col gap-3 p-10">
        <div className="flex w-fit items-center justify-center gap-3 rounded-2xl bg-black px-4 py-3 font-extrabold text-white">
          <h2 className="text-2xl">Welcome back to</h2>
          <hr className="h-5 w-0.5 rounded-full bg-white" />
          <h1 className="text-4xl">Inquira</h1>
        </div>
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

export default Login;
