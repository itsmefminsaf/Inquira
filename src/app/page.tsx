import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <nav className="m-3 flex items-center justify-center gap-3 rounded-2xl bg-black p-3">
        <h1 className="text-4xl font-extrabold text-yellow-300">Inquira</h1>
        <hr className="h-5 w-0.5 rounded-full bg-white" />
        <Link
          href={"/login"}
          className="text-xl font-black text-white underline-offset-8 hover:underline"
        >
          Login
        </Link>
        <Link
          href={"/sign-up"}
          className="rounded-xl bg-white px-2 py-1 text-2xl font-black duration-1000 hover:scale-105"
        >
          Sign up
        </Link>
      </nav>
    </main>
  );
}
