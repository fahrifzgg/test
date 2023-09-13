import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <Link
        className="px-4 py-2 bg-white text-black rounded-md"
        href="/downloads/Zadna.xlsx"
        download
      >
        download
      </Link>
    </main>
  );
}
