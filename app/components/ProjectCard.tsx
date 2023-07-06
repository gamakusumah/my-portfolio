import Image from "next/image";
import { motion } from "framer-motion";
import { container, item } from "@/app/animations";
import { HiOutlineExternalLink } from "react-icons/hi";

interface CardProp {
  name: string;
  designer: string;
  designerLink: string;
  desc: string;
  tools: string[];
  cta: string;
  imgSrc: string;
  link: string;
  caption: string | null;
  imgOrder: number | null;
}

export default function ProjectCard(prop: CardProp) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      id="projects"
      className="grid gap-5 md:grid-cols-2 md:items-center md:gap-6"
    >
      <motion.div
        variants={item}
        className={`h-52 w-full overflow-hidden rounded-2xl border lg:h-[318px] ${
          prop.imgOrder !== null ? `md:order-${prop.imgOrder}` : null
        }`}
      >
        <Image
          src={prop.imgSrc}
          width={1366}
          height={2000}
          className="h-auto w-full"
          alt={`${prop.name} Image`}
          quality={100}
        />
      </motion.div>
      {/* Information */}
      <div className="grid gap-4 md:items-center md:justify-self-center md:text-center lg:w-[330px]">
        <div>
          <motion.h4 variants={item} className="text-lg font-bold uppercase">
            {prop.name}
          </motion.h4>
          <motion.p variants={item} className="text-sm text-caption">
            Design by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={prop.designerLink}
              className="text-base text-text"
            >
              {prop.designer}
            </a>
          </motion.p>
        </div>
        <motion.p variants={item}>{prop.desc}</motion.p>
        {prop.caption !== null ? (
          <motion.p variants={item} className="text-sm text-caption">
            {prop.caption}
          </motion.p>
        ) : null}

        <ul className="flex font-bold md:mx-auto">
          {prop.tools.map((tool, i) => (
            <motion.li variants={item} key={i} className="mr-3">
              {tool}
            </motion.li>
          ))}
        </ul>

        {/* Buttons */}
        <motion.a
          variants={item}
          target="_blank"
          rel="noopener noreferrer"
          href={prop.link}
          className="flex h-10 place-content-end items-center justify-center rounded-xl border font-semibold hover:border-text"
        >
          {prop.cta}
          <HiOutlineExternalLink size={24} className="ml-2" />
        </motion.a>
      </div>
    </motion.div>
  );
}
