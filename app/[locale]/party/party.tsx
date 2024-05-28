"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Party() {
  return (
    <section className=" ">
      <motion.div
        className=" pt-[140px] w-[100vw] h-[300px]  lg:h-[500px] overflow-hidden static justify-center items-center flex "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="  h-auto static ">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-[100vw] text-xl lg:text-5xl font-semibold absolute left-0  top-[190px] lg:top-[250px] text-center"
          >
            IMPREZY <br /> OKOLICZNOŚCIOWE
          </motion.span>
          <Image
            src="/party/party.jpg"
            width={100}
            height={300}
            alt="menu"
            layout="responsive"
            objectFit="cover"
            className="h-[200px]"
          />
        </div>
      </motion.div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <span>OPIS </span>
          <span>788150050</span>
        </div>
        <div id="party-gallery"></div>
      </div>
    </section>
  );
}
