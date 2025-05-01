import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Inquira",
};

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <header className="flex items-center justify-between bg-black p-5 text-white">
        <div className="flex items-center gap-5">
          <h1 className="text-5xl font-extrabold">Inquira</h1>
          <hr className="h-10 w-0.5 rotate-12 bg-white" />
          <h3 className="text-2xl font-bold">Dashboard</h3>
          <hr className="h-10 w-0.5 rotate-12 bg-white" />
          <h3 className="text-2xl font-bold">User name</h3>
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
      </header>
      {children}
    </main>
  );
};

export default DashboardLayout;
