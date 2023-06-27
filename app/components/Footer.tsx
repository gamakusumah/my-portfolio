import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="container grid gap-3 bg-text px-6 py-4">
      <p className="text-sm text-white">
        Copyrights © 2023. All rights are reserved
      </p>
      {/* Social Media */}
      <div className="flex space-x-4">
        <AiFillLinkedin size={36} className="fill-white" />
        <AiFillGithub size={36} className="fill-white" />
        <AiFillInstagram size={36} className="fill-white" />
      </div>
    </footer>
  );
}
