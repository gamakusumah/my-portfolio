import { MdEmail, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import { container, item } from "@/app/animations";

export default function Contact() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      id="contact"
      className="container grid gap-8 px-6 py-20 lg:gap-12 lg:py-24"
    >
      {/* Headline and subheadline */}
      <motion.div variants={item}>
        <h2 className="mb-3 text-lg font-bold uppercase text-prim">Contact</h2>
        {/* <h3 className="text-2xl font-bold">Feel free to hit me up!</h3> */}
      </motion.div>

      <div className="px-2 md:flex md:items-center md:justify-between lg:justify-normal lg:px-8">
        <motion.div
          variants={item}
          className="mb-5 flex items-center md:mb-0 lg:mr-12"
        >
          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-200">
            <MdLocationOn size={32} className="fill-blue-500" />
          </div>
          <div>
            <h3 className="mb-2 font-bold">Location</h3>
            <p>Bandung, Indonesia</p>
          </div>
        </motion.div>
        <motion.div variants={item} className="flex items-center">
          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-200">
            <MdEmail size={32} className="fill-blue-500" />
          </div>
          <div>
            <h3 className="mb-2 font-bold">Email</h3>
            <p>gamakusumah@gmail.com</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
