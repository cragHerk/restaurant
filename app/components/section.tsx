"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactButton from "./contact-button";

const Section = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();

  return (
    <section
      id="section"
      className="flex justify-center items-center flex-col bg-black text-g"
    >
      <div className="flex flex-col justify-center items-center">
        {" "}
        <motion.h1
          ref={ref1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView1 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-2xl md:text-4xl font-bold font-serif mt-6 text-center"
        >
          Zapraszamy do naszej restauracji
        </motion.h1>
        <motion.span
          ref={ref2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView2 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="text-sm opacity-70 w-2/3 mt-6 text-center"
        >
          Twins Restaurant to urokliwe miejsce znajdujace sie w poblizu
          Największego Parku rozrywki w Polsce - Energylandia w Zatorze. Włoska
          kuchnia, pyszna pizza, tradycyjne polskie akcenty oraz soczyste
          burgery - tych pozycji nie zabraknie w naszym menu. Przestronna
          klimatyzowana sala, przytulny taras, nowoczesny wystrój oraz
          profesjonalna obsługa serwująca świeże dania z pewnością umili Państwu
          chwile.
        </motion.span>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView3 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.27 }}
          className="p-2 mt-8 mb-[100px] rounded bg-white opacity-60 text-black"
        >
          <ContactButton />
        </motion.div>
      </div>

      <div className=" w-full bg-g h-[300px] md:h-[500px] m-4 relative ">
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView4 ? 1 : 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-black justify-center items-center py-[80px] md:absolute   md:top-[80px] md:left-1/3 flex md:items-start  flex-col"
        >
          {" "}
          <h1 className=" text-7xl md:text-9xl font-serif z-20 ">MENU</h1>
          <span className="text-sm  text-white z-20 font-bold">
            Zapraszamy do zakładki „Menu”
          </span>
          <Link href="/menu" className="relative z-40">
            <button
              className="w-[80px] p-1 m-2 rounded bg-white text-xl font-bold cursor-pointer"
              type="button"
            >
              Menu
            </button>
          </Link>
          <div className="bg-black opacity-20 rounded-full md:w-[370px] w-[260px] h-[260px] md:h-[370px] absolute  md:left-[-80px] md:top-[-20px]"></div>
        </motion.div>

        <motion.div
          ref={ref5}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: inView5 ? 1 : 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className=" hidden md:block md:absolute left-2/4 top-[75px] z-10"
        >
          <Image src="/m.jpg" width={400} height={400} alt="section" />
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
