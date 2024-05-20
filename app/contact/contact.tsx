"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section className=" bg-black text-g flex flex-col justify-center items-center w-full truncate">
      <motion.div
        className=" pt-[140px] "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[100vw] lg:h-[calc(100vh-140px)] h-auto static ">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-8xl font-semibold absolute left-[calc(50vw-250px)] top-[50%]"
          >
            KONTAKT
          </motion.span>
          <Image
            src="/contact/contact.png"
            width={100}
            height={100}
            alt="menu"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
