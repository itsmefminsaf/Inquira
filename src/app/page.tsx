import NavBtn from "@/components/NavBtn";

export default function Home() {
  return (
    <main className="">
      <nav className="m-3 flex items-center justify-center gap-3 rounded-2xl bg-black p-3">
        <h1 className="text-4xl font-extrabold text-yellow-300">Inquira</h1>
        <hr className="h-5 w-0.5 rounded-full bg-white" />
        <NavBtn />
      </nav>
    </main>
  );
}
