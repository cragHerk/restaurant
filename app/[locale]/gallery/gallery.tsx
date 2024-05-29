"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Gallery() {
  return (
    <section className=" bg-black text-g flex flex-col justify-center items-center w-full truncate">
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
            className="w-[100vw] text-2xl md:text-4xl large:text-6xl font-serif font-bold absolute left-0  top-[205px] lg:top-[300px] text-center"
          >
            GALERIA
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
    </section>
  );
}
