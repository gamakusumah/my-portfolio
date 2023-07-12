import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { container, item } from "@/app/animations";

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      id="hero"
      className="container grid gap-10 px-6 py-20 md:grid-flow-col md:items-center lg:grid-cols-2 lg:py-32"
    >
      {/* Heading and subheading */}
      <div className="md:items-center">
        <motion.h1
          variants={item}
          className="mb-6 text-3xl font-black md:text-4xl lg:text-5xl"
        >
          Hello! I'm <br />
          Gama Kusumah
        </motion.h1>
        <motion.p variants={item} className="mb-6 w-[90%] text-caption">
          A <span className="font-semibold">Frontend Web Developer</span> based
          in Bandung, Indonesia.
        </motion.p>
        {/* Social Media */}
        <motion.div variants={item} className="flex space-x-4 md:order-3">
          <Link href="https://www.linkedin.com/in/gama-kusumah">
            <AiFillLinkedin size={36} className="fill-text" />
          </Link>
          <Link href="https://github.com/gamakusumah">
            <AiFillGithub size={36} className="fill-text" />
          </Link>
        </motion.div>
      </div>

      {/* Photo */}
      <motion.div variants={item} className="relative mx-auto h-[304px] w-60">
        <Image
          src="/hero4.png"
          width={224}
          height={288}
          alt="Hero Image"
          quality={100}
          className="md:w- bg-slate-200"
        />
        <div className="absolute bottom-0 right-0 -z-10 h-72 w-56 border-[3px] border-text"></div>
      </motion.div>
    </motion.section>
  );
}
