import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="container grid gap-8 px-6 py-20">
      {/* Headline and subheadline */}
      <div>
        <h2 className="mb-3 text-lg font-bold uppercase text-blue-500">
          Projects
        </h2>
        <h3 className="text-2xl font-bold">
          Each project is a uniqe place of development
        </h3>
      </div>

      {/* Project Card */}
      <div className="grid gap-14">
        <ProjectCard
          name="NFT Marketplace"
          designer="Anima"
          designerLink="https://www.figma.com/community/file/1173962104946517060"
          link="https://nft-marketplace-one-zeta.vercel.app/"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus hic
          id illum voluptate porro nulla."
          tools={["NextJS", "Tailwind", "Framer Motion"]}
          cta="View Demo"
          imgSrc="/projects/nft.png"
          caption={null}
        />
        <ProjectCard
          name="Jasa Prima"
          designer="Gama"
          designerLink="/"
          link="https://jasaprima.co.id/"
          desc="Jasa Prima is a Service Bureau that serves the renewal of STNK and others, with online services and document pick-ups in surrounding Bandung."
          tools={["Bootstrap", "CI3"]}
          cta="Visit Website"
          imgSrc="/projects/jp.png"
          caption='No. 1 on the Google SERP with keyword "biro jasa bandung"'
        />
        <ProjectCard
          name="NFT Marketplace"
          designer="Anima"
          designerLink="/"
          link="/"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus hic
          id illum voluptate porro nulla."
          tools={["NextJS", "Tailwind", "Framer Motion"]}
          cta="View Demo"
          imgSrc="/projects/nft.png"
          caption={null}
        />
      </div>
    </section>
  );
}
