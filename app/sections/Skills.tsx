import Image from "next/image";
import { motion } from "framer-motion";
import { container, fadeIn, item } from "@/app/animations";

export default function Skills() {
  return (
    <section
      id="skills"
      className="container grid gap-8 px-6 py-20 lg:gap-12 lg:py-24"
    >
      <motion.h2
        variants={item}
        initial="hidden"
        whileInView="visible"
        className="text-lg font-bold uppercase text-prim"
      >
        Skills
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-5 items-center gap-8 px-2 lg:gap-10 lg:px-8"
      >
        <motion.div variants={item}>
          <Image
            width={200}
            height={200}
            src="/html.png"
            alt="HTML Logo"
            className="h-8 w-auto"
          />
        </motion.div>
        <motion.div variants={item}>
          <Image
            width={100}
            height={100}
            src="/css.svg"
            alt="CSS Logo"
            className="h-8 w-auto "
          />
        </motion.div>
        <motion.div variants={item}>
          <Image
            width={100}
            height={100}
            src="/js.png"
            alt="Javascript Logo"
            className="h-8 w-auto"
          />
        </motion.div>
        <motion.div variants={item}>
          <Image
            width={100}
            height={100}
            src="/ts.png"
            alt="Typescript Logo"
            className="h-8 w-auto"
          />
        </motion.div>
        <motion.div variants={item}>
          <Image
            width={100}
            height={100}
            src="/react.svg"
            alt="React JS Logo"
            className="h-8 w-auto"
          />
        </motion.div>
        <motion.div variants={item}>
          <Image
            width={100}
            height={100}
            src="/tailwind.svg"
            alt="Tailwind CSS Logo"
            className="h-8 w-auto"
          />
        </motion.div>
        <motion.div variants={item}>
          <Image
            width={100}
            height={100}
            src="/framer.svg"
            alt="framer Logo"
            className="h-8 w-auto"
          />
        </motion.div>
        <motion.div variants={item}>
          <Image
            width={100}
            height={100}
            src="/nextjs.svg"
            alt="nextjs Logo"
            className="h-auto w-20"
          />
        </motion.div>
        <motion.span variants={item} className="text-xl font-bold">
          SEO
        </motion.span>
      </motion.div>
    </section>
  );
}
