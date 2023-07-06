import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container grid gap-8 px-6 py-20 lg:gap-12 lg:py-24"
    >
      {/* Headline and subheadline */}
      <div>
        <h2 className="mb-3 text-lg font-bold uppercase text-prim">Projects</h2>
        {/* <h3 className="text-2xl font-bold">
          Each project is a uniqe place of development
        </h3> */}
      </div>

      {/* Project Card */}
      <div className="grid gap-14 px-2 md:gap-16 md:px-4 lg:gap-28 lg:px-8">
        <ProjectCard
          name="NFT Marketplace"
          designer="Anima"
          designerLink="https://www.figma.com/community/file/1173962104946517060"
          link="https://nft-marketplace-one-zeta.vercel.app/"
          desc="NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k Nft Artists."
          tools={["Next.js", "Tailwind", "Framer Motion"]}
          cta="View Demo"
          imgSrc="/projects/nft.png"
          caption={null}
          imgOrder={null}
        />
        <ProjectCard
          name="Jasa Prima"
          designer="SAYA"
          designerLink="/"
          link="https://jasaprima.co.id/"
          desc="A Service Bureau website that serves the renewal of STNK and others, with online services and document pick-ups in surrounding Bandung."
          tools={["Bootstrap", "CI3"]}
          cta="Visit Website"
          imgSrc="/projects/jp.png"
          caption='No. 1 on the Google SERP with keyword "biro jasa bandung"'
          imgOrder={3}
        />
        <ProjectCard
          name="Jasa Prima Admin"
          designer="SAYA"
          designerLink="/"
          link="https://drive.google.com/file/d/1gu3JstvVqo-DDpuVmCYiq9SPCFn20FxE/view0"
          desc="A Jasa Prima Admin Dashboard for administrative management of office and orders data."
          tools={["React.js", "TailwindCSS", "MongoDB", "Express.js"]}
          cta="View Demo"
          imgSrc="/projects/jpd2.png"
          caption={null}
          imgOrder={null}
        />
        <ProjectCard
          name="TAILOR ON"
          designer="SAYA"
          designerLink="/"
          link="https://drive.google.com/file/d/1YDtU5tnZoUes1xYHXppRnuYhdhQKhsbu/view"
          desc="Tailor On is a custom clothing website where customers can choose the model, fabric and size they want and supported by Auto-Generate Pattern technology."
          tools={["Php", "Bootstrap", "MySql"]}
          cta="View Demo"
          imgSrc="/projects/tailoron.png"
          caption={null}
          imgOrder={3}
        />
      </div>
    </section>
  );
}
