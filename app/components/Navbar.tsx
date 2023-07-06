"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { motion } from "framer-motion";
import { container, fadeIn, item } from "../animations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="z-[999] flex h-16 w-full items-center justify-center bg-white px-6 md:px-12 lg:fixed lg:justify-between lg:px-24"
      id="navbar"
    >
      {/* Logo */}
      <motion.div variants={fadeIn} initial="hidden" animate="visible">
        <Link href="/" className="font-poppins text-lg font-bold lg:text-xl">
          Gama
        </Link>
      </motion.div>
      {/* <button>
        <AiOutlineMenu size={24} className="fill-text" />
      </button> */}

      {/* Menu */}
      <div className="fixed right-0 top-1/2 z-20 flex items-center lg:static lg:h-16">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className={`absolute right-2 flex appearance-none items-center justify-center rounded-3xl border bg-white p-2 transition-all duration-500 ease-in-out hover:border-caption lg:hidden ${
            isOpen ? "right-52" : "right-2"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <AiOutlineClose
              size={22}
              className={`cursor-pointer fill-text transition-all duration-500 ease-in-out ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <AiOutlineMenu
              size={22}
              className={`cursor-pointer fill-text transition-all duration-500 ease-in-out ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </motion.button>

        <div
          className={`ease-in-ou absolute w-48 rounded-2xl border bg-white px-4 transition-all duration-500 lg:static lg:w-auto lg:border-none lg:bg-transparent lg:px-0 lg:py-0 ${
            isOpen ? "right-2" : "-right-48"
          }`}
        >
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-semibold lg:flex lg:space-x-2"
          >
            <motion.a variants={item} href="#navbar" className="px-3 py-2">
              <li>Home</li>
            </motion.a>
            <motion.a variants={item} href="#about" className="px-3 py-2">
              <li>About</li>
            </motion.a>
            <motion.a variants={item} href="#skills" className="px-3 py-2">
              <li>Skills</li>
            </motion.a>
            <motion.a variants={item} href="#projects" className="px-3 py-2">
              <li>Projects</li>
            </motion.a>
            <motion.a variants={item} href="#contact" className="px-3 py-2">
              <li>Contact</li>
            </motion.a>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
}
