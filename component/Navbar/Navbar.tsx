import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white/95 border-1 border-b-slate-200 px-4 py-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link
            href="/"
            className="text-2xl font-bold text-black"
          >
            Spell <span className="">Fixer</span>
          </Link>
        </div>

        <nav className="">
          <ul className="flex gap-5 items-center text-black">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-6 items-center">
          {/* <Link
            href="/login"
            className="border-1 border-white text-white px-6 py-2 rounded"
          >
            Login
          </Link> */}
          <Link
            href="/register"
            className="border-1 border-white bg-black rounded-md text-white px-10 py-2"
          >
            Join
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
