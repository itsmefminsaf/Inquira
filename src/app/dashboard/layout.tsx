import getUserName from "@/utils/getUserName";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard | Inquira",
};

const DashboardLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const username = await getUserName();

  if (!username) return redirect("/login");

  return (
    <main className="grid h-screen w-screen grid-rows-[auto_1fr]">
      <header className="flex items-center justify-between bg-black p-5 text-white">
        <div className="flex items-center gap-5">
          <h1 className="text-5xl font-extrabold">Inquira</h1>
          <hr className="h-10 w-0.5 rotate-12 bg-white" />
          <h3 className="text-2xl font-bold">Dashboard</h3>
          <hr className="h-10 w-0.5 rotate-12 bg-white" />
          <h3 className="text-2xl font-bold">{username}</h3>
        </div>
        <nav className="flex gap-3">
          <li className="list-none underline-offset-8 hover:font-bold hover:underline">
            <a href="/dashboard">Overview</a>
          </li>
          <li className="list-none underline-offset-8 hover:font-bold hover:underline">
            <a href="/dashboard/forms">Forms</a>
          </li>
          <li className="list-none underline-offset-8 hover:font-bold hover:underline">
            <a href="/dashboard/settings">Settings</a>
          </li>
        </nav>
        <div className="flex justify-end">
          <Link
            href={"/dashboard/forms/new"}
            className="rounded-full bg-white px-3 py-2 text-2xl font-bold text-black duration-300 hover:scale-105"
          >
            New Form
          </Link>
        </div>
      </header>
      {children}
    </main>
  );
};

export default DashboardLayout;
