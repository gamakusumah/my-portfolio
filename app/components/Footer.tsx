import Link from "next/link";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-text py-8">
      <div className="container px-6 md:flex md:items-center md:justify-between">
        <p className="mb-4 text-sm text-white md:mb-0">
          Copyrights © 2023. All rights are reserved
        </p>
        {/* Social Media */}
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/in/gama-kusumah">
            <AiFillLinkedin size={36} className="fill-white" />
          </Link>
          <Link href="https://github.com/gamakusumah">
            <AiFillGithub size={36} className="fill-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
