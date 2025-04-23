import Link from "next/link";

const Login = () => {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <form className="flex flex-col gap-3 p-10">
        <div className="flex w-fit items-center justify-center gap-3 rounded-2xl bg-black px-4 py-3 font-extrabold text-white">
          <h2 className="text-2xl">Welcome back to </h2>
          <hr className="h-5 w-0.5 rounded-full bg-white" />
          <h1 className="text-4xl">Inquira</h1>
        </div>
        <label className="text-lg font-bold" htmlFor="email">
          E-mail:
        </label>
        <input
          className="rounded-2xl border-2 px-3 py-2 outline-none focus:border-4"
          id="email"
          type="email"
          placeholder="Ex: yourname@email.com"
          required
        />
        <label className="text-lg font-bold" htmlFor="password">
          Password:
        </label>
        <input
          className="rounded-2xl border-2 px-3 py-2 outline-none focus:border-4"
          id="password"
          type="password"
          placeholder="Ex: ********"
          required
        />
        <Link
          href={"/forgot-password"}
          className="font-semibold hover:underline"
        >
          Forgot password
        </Link>
        <div className="flex items-center justify-center gap-3">
          <Link href={"/sign-up"} className="text-lg font-bold">
            Sign up
          </Link>
          <hr className="h-5 w-0.5 rounded-full bg-black" />
          <input
            type="submit"
            value="Continue"
            className="rounded-2xl bg-black px-3 py-2 text-lg font-bold text-white"
          />
        </div>
      </form>
    </main>
  );
};

export default Login;
