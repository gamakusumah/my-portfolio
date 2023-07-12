import Image from "next/image";
import laptop from "@/public/laptop.jpg";
import { motion } from "framer-motion";
import { container, item } from "@/app/animations";

export default function About() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="row container grid gap-8 px-6 py-20 md:grid-cols-2 lg:gap-12 lg:gap-y-4 lg:py-24 "
      id="about"
    >
      {/* Headline and subheadline */}
      <motion.div variants={item} className="md:order-2 ">
        <h2 className="text-lg font-bold uppercase text-prim">About Me</h2>
        {/* <h3 className="text-2xl font-bold">
          A Junior Front-End React Developer
        </h3> */}
      </motion.div>

      <motion.div
        variants={item}
        className="mb-5 h-full w-full overflow-hidden rounded-2xl bg-slate-300 md:order-1 md:row-span-2 md:mb-0"
      >
        <Image
          src={laptop}
          alt="About Me Image"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.p variants={item} className="text-justify md:order-3">
        A Junior Frontend Web Developer with experience designing and creating
        responsive websites in several fields since 2019. Proficient with
        TailwindCSS and React.js with the Next.js framework, as well as basic
        knowledge of UX Design and SEO experience.
      </motion.p>
    </motion.section>
  );
}
