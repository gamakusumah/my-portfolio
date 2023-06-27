import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Hero() {
  return (
    <section id="hero" className="container grid gap-10 px-6 py-20">
      {/* Heading and subheading */}
      <div>
        <h1 className="mb-6 text-3xl font-black">Front-End React Developer</h1>
        <p className="w-[90%] text-caption">
          Hello, I'm <span className="font-semibold">Gama Kusumah</span>. A
          Front-end React developer based in Bandung, Indonesia.
        </p>
      </div>

      {/* Social Media */}
      <div className="flex space-x-4">
        <AiFillLinkedin size={36} className="fill-text" />
        <AiFillGithub size={36} className="fill-text" />
        <AiFillInstagram size={36} className="fill-text" />
      </div>

      {/* Photo */}
      <div className="h-64 w-full rounded-2xl bg-caption"></div>
    </section>
  );
}
