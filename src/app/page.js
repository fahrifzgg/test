import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="bg-white text-black flex justify-between px-6 py-3">
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="flex">
          <ul className="flex space-x-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Product</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Home Page</h1>
    </main>
  );
}
