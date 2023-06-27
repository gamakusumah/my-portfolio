"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex h-16 items-center justify-between bg-white px-6">
      {/* Logo */}
      <Link href="/" className="font-poppins text-lg font-bold">
        Gama
      </Link>
      <button>
        <AiOutlineMenu size={24} className="fill-text" />
      </button>

      {/* Menu */}
      {/* <div className="absolute right-0 top-0 flex h-screen items-center lg:static lg:h-16">
        <button
          className={`absolute right-2 flex h-8 w-8 appearance-none items-center justify-center rounded-3xl border-[1px] border-caption transition-all duration-500 ease-in-out lg:hidden ${
            isOpen ? "right-2" : "right-52"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdOutlineNavigateNext
            size={24}
            className={`cursor-pointer fill-text transition-all duration-500 ease-in-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </button>

        <div
          className={`ease-in-ou absolute w-48 rounded-2xl border-[1px] border-caption px-4 transition-all duration-500 lg:static lg:w-auto lg:bg-transparent lg:py-0 ${
            isOpen ? "-right-48" : "right-2"
          }`}
        >
          <ul className="font-semibold lg:flex lg:space-x-2">
            <Link href="/" className="px-3 py-2">
              <li>Home</li>
            </Link>
            <Link href="/" className="px-3 py-2">
              <li>About</li>
            </Link>
            <Link href="/" className="px-3 py-2">
              <li>Projects</li>
            </Link>
            <Link href="/" className="px-3 py-2">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div> */}
    </nav>
  );
}
