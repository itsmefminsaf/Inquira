import validateUser from "@/actions/validateUser";
import Link from "next/link";

const NavBtn = async () => {
  const user = await validateUser();
  if (!user) {
    return (
      <>
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
      </>
    );
  }
  return (
    <Link
      href={"/dashboard"}
      className="rounded-xl bg-white px-2 py-1 text-2xl font-black duration-1000 hover:scale-105"
    >
      Go to dashboard
    </Link>
  );
};

export default NavBtn;
