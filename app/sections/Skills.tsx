import Image from "next/image";

export default function Skills() {
  return (
    <section className="container grid gap-8 px-6 py-20">
      <div>
        <h2 className="text-lg font-bold uppercase text-blue-500">Skills</h2>
      </div>

      <div className="grid grid-cols-5 items-center gap-8">
        <Image
          width={200}
          height={200}
          src="/html.png"
          alt="HTML Logo"
          className="h-8 w-auto"
        />
        <Image
          width={100}
          height={100}
          src="/css.svg"
          alt="CSS Logo"
          className="h-8 w-auto "
        />
        <Image
          width={100}
          height={100}
          src="/js.png"
          alt="Javascript Logo"
          className="h-8 w-auto"
        />
        <Image
          width={100}
          height={100}
          src="/ts.png"
          alt="Typescript Logo"
          className="h-8 w-auto"
        />
        <Image
          width={100}
          height={100}
          src="/react.svg"
          alt="React JS Logo"
          className="h-8 w-auto"
        />
        <Image
          width={100}
          height={100}
          src="/tailwind.svg"
          alt="Tailwind CSS Logo"
          className="h-8 w-auto"
        />
        <Image
          width={100}
          height={100}
          src="/framer.svg"
          alt="framer Logo"
          className="h-8 w-auto"
        />
        <Image
          width={100}
          height={100}
          src="/nextjs.svg"
          alt="nextjs Logo"
          className="h-auto w-20"
        />
        <span className="text-xl font-bold">SEO</span>
      </div>
    </section>
  );
}
