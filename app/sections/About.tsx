import Image from "next/image";
import laptop from "@/public/laptop.jpg";

export default function About() {
  return (
    <section
      className="row container grid gap-8 px-6 py-20 md:grid-cols-2 lg:gap-12 lg:gap-y-4 lg:py-24 "
      id="about"
    >
      {/* Headline and subheadline */}
      <div className="md:order-2 ">
        <h2 className="text-lg font-bold uppercase text-prim">About Me</h2>
        {/* <h3 className="text-2xl font-bold">
          A Junior Front-End React Developer
        </h3> */}
      </div>

      <div className="mb-5 h-full w-full overflow-hidden rounded-2xl bg-slate-300 md:order-1 md:row-span-2 md:mb-0">
        <Image
          src={laptop}
          alt="About Me Image"
          className="h-full w-full object-cover"
        />
      </div>
      <p className="text-justify md:order-3">
        A Junior Front-end Web Developer with experience designing and creating
        responsive websites in several fields since 2019. Proficient with
        TailwindCSS and ReactJS with the NextJS framework, as well as basic
        knowledge of UX Design and website SEO experience. SERP.
      </p>
    </section>
  );
}
