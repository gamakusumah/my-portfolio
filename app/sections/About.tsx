import React from "react";

export default function About() {
  return (
    <section
      className="container grid gap-8 px-6 py-20 lg:gap-12 lg:py-24 "
      id="about"
    >
      {/* Headline and subheadline */}
      <div>
        <h2 className="mb-3 text-lg font-bold uppercase text-blue-500">
          About Me
        </h2>
        <h3 className="text-2xl font-bold">
          A dedicated Front-End React Developer
        </h3>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-5 lg:px-8">
        <div className="h-64 w-full rounded-2xl bg-slate-300"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid
          magni dignissimos reiciendis error quo est cupiditate natus eum ullam.
        </p>
      </div>
    </section>
  );
}
