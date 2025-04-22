import Link from "next/link";

const SignUp = () => {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <form className="flex flex-col gap-3 p-10">
        <div className="flex w-fit items-center justify-center gap-3 rounded-2xl bg-black px-4 py-3 font-extrabold text-white">
          <h1 className="text-4xl">Inquira</h1>
          <hr className="h-5 w-0.5 rounded-full bg-white" />
          <h2 className="text-2xl">Sign up to continue</h2>
        </div>
        <label className="text-lg font-bold" htmlFor="name">
          Name:
        </label>
        <input
          className="rounded-2xl border-2 px-3 py-2 outline-none focus:border-4"
          id="name"
          type="text"
          placeholder="Ex: John Doe"
          autoFocus
          required
        />
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
        <label className="text-lg font-bold" htmlFor="confirmPassword">
          Confirm password:
        </label>
        <input
          className="rounded-2xl border-2 px-3 py-2 outline-none focus:border-4"
          id="confirmPassword"
          type="password"
          placeholder="Ex: ********"
          required
        />
        <div className="flex items-center justify-center gap-3">
          <input
            type="submit"
            value="Continue"
            className="rounded-2xl bg-black px-3 py-2 text-lg font-bold text-white"
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
