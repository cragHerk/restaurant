"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineMyLocation } from "react-icons/md";
const Location = ({
  translations,
}: {
  translations: {
    title1: string;
    title2: string;
    adress: string;
    map: string;
    open: string;
    from: string;
    to: string;
  };
}) => {
  return (
    <section className="  flex flex-col   justify-center items-center md:min-h-screen ">
      <div className="pt-[140px] flex flex-col justify-center items-center ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl large:text-6xl font-serif font-bold pt-[130px] flex flex-col justify-center items-center"
        >
          <span>{translations.title1} </span> <span>{translations.title2}</span>
        </motion.h1>
        <div className="flex-col md:flex-row flex justify-around my-[50px] w-[70vw]">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center"
          >
            <span className="flex flex-col xl:flex-row">
              {translations.adress}
              <span className="text-white opacity-70">Jana Pawła 2, 9</span>
            </span>
            <span> 32-640 Zator</span>
            <a
              className="flex justify-center items-center"
              href="https://www.google.com/maps/place/Twins+Restaurant/@49.9929569,19.4315575,17z/data=!3m1!4b1!4m6!3m5!1s0x47168dc4442d5e1f:0x1be216c68caf475d!8m2!3d49.9929569!4d19.4315575!16s%2Fg%2F11s_kdbnl4?entry=ttu"
            >
              {" "}
              <MdOutlineMyLocation />
              <span>{"["}</span>
              <span className="text-white opacity-70 ">{translations.map}</span>
              <span>{"]"}</span>
            </a>
            <div className="flex flex-col justify-center items-center text-left w-[200px] lg:w-[340px]">
              <h2 className="font-bold text-xl py-6">{translations.open}</h2>
              <span>{translations.from}</span>
              <span>{translations.to}</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative my-6"
          >
            {" "}
            <Image
              src="/location/mapa.png"
              width={500}
              height={500}
              alt="map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
