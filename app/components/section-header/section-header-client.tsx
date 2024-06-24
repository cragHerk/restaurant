"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const SectionHeaderClient = ({
  translations,
}: {
  translations: {
    title1: string;
    title2: string;
    title3: string;
  };
}) => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  return (
    <div
      id="section-header"
      className="bg-black h-[220px]  lg:h-[100px] flex-wrap flex justify-center pt-[10px] lg:pt-0 lg:items-center "
    >
      <div className="flex flex-wrap items-center justify-around h-14 w-full opacity-60">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView1 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" flex items-center justify-center bg-g opacity-60 h-14 w-full lg:w-[330px] mt-1 sm:mt-0 lg:mt-0 mb-3 lg:mb:0"
        >
          <span className="font-bold text-2xl flex items-center">
            {translations.title1}
            <Image
              src="/roller-coaster.svg"
              width={30}
              height={30}
              alt="roller-coaster"
              className="ml-3"
            />
          </span>
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView2 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center bg-g opacity-60 h-14 w-full lg:w-[330px]  mb-3 lg:mb:0"
        >
          <span className="font-bold text-2xl flex items-center ">
            <Image
              src="/italy-flag.svg"
              width={30}
              height={30}
              alt="italy"
              className="mr-3"
            />
            {translations.title2}
          </span>
        </motion.div>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView3 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="  flex items-center justify-center bg-g opacity-60 h-14 w-full lg:w-[330px] mb-3 lg:mb:0 "
        >
          <span className=" font-bold text-2xl flex items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf /> {translations.title3}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionHeaderClient;
