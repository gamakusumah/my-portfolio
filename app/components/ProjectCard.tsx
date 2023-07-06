import Image from "next/image";
import Link from "next/link";
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
    <div className="grid gap-5 md:grid-cols-2 md:gap-6">
      <div
        className={`h-52 w-full overflow-hidden rounded-2xl border md:h-[318px] ${
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
      </div>
      {/* Information */}
      <div className="grid gap-4 md:items-center md:justify-self-center md:text-center lg:w-[330px]">
        <div>
          <h4 className="text-lg font-bold uppercase">{prop.name}</h4>
          <p className="text-sm text-caption">
            Design by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={prop.designerLink}
              className="text-base text-text"
            >
              {prop.designer}
            </a>
          </p>
        </div>
        <p>{prop.desc}</p>
        {prop.caption !== null ? (
          <p className="text-sm text-caption">{prop.caption}</p>
        ) : null}

        <ul className="flex space-x-3 font-bold md:mx-auto">
          {prop.tools.map((tool, i) => (
            <li key={i}>{tool}</li>
          ))}
        </ul>

        {/* Buttons */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={prop.link}
          className="flex h-10 place-content-end items-center justify-center rounded-xl border font-semibold hover:border-text"
        >
          {prop.cta}
          <HiOutlineExternalLink size={24} className="ml-2" />
        </a>
      </div>
    </div>
  );
}
