"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp } from "react-icons/fa";

export default function Party({
  translations,
}: {
  translations: {
    title1: string;
    title2: string;
    description: string;
    description2: string;
  };
}) {
  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(900);
  const isLarge = useMediaQuery(1200);
  // const [ref1, inView1] = useInView();
  // const [ref2, inView2] = useInView();
  // const [ref3, inView3] = useInView();
  // const [ref4, inView4] = useInView();
  // const [ref5, inView5] = useInView();
  return (
    <section className="truncate bg-white">
      <motion.div
        className="  pt-[140px]  h-[300px]  lg:h-[500px] overflow-hidden static justify-center items-center flex "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="   ">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full  text-g text-2xl md:text-4xl large:text-6xl font-serif font-bold absolute left-0  top-[190px] lg:top-[250px] text-center"
          >
            <span>{translations.title1}</span> <br />{" "}
            <span>{translations.title2}</span>
          </motion.span>
          {/* <Image
            src="/party/party.jpg"
            width={isMobile ? 300 : 400}
            height={isTablet ? 300 : 400}
            alt="menu"
            layout="responsive"
            objectFit="cover"
            className="h-[200px]"
          /> */}
        </div>
      </motion.div>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <div className=" text-balance flex justtify-center items-center text-center md:mr-[50px] ">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded bg-grey bg-opacity-50 m-2 p-2 w-[400px] md:w-[300px]"
            >
              {" "}
              <span className="font-serif ">{translations.description}</span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded flex justify-center items-center p-3"
          >
            {" "}
            <Image
              src="/party/1.jpg"
              width={isMobile ? 400 : 300}
              height={700}
              alt="party"
              className="m-2 rounded"
            />
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row-reverse ">
          {" "}
          <div className=" text-balance flex justtify-center items-center text-center md:ml-[50px]">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded bg-grey bg-opacity-50 m-2 p-2 w-[400px] md:w-[300px]"
            >
              {" "}
              <span className="font-serif ">{translations.description2}</span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded flex justify-center items-center p-3 "
          >
            <Image
              src="/party/2.jpg"
              width={isMobile ? 400 : 300}
              height={700}
              alt="party"
              className="m-2 rounded"
            />
          </motion.div>
        </div>
      </div>
      <a
        title="tel"
        href="tel:+48788150050"
        className="fixed top-[240px] left-2 rounded-full bg-g p-1 hover:scale-110 transition cursor-pointer"
      >
        <FaWhatsapp size={40} />
      </a>
    </section>
  );
}
