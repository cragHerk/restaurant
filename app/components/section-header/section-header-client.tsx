"use client";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";

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
    <div id="section-header" className="relative overflow-hidden bg-black/80">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.25),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.65))]" />

      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-center px-4 sm:px-6 pt-6 pb-8 sm:pt-10 sm:pb-10 lg:pt-8 lg:pb-8">
        <div className="grid w-full grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{
              opacity: inView1 ? 1 : 0,
              y: 0,
              scale: inView1 ? 1 : 0.98,
            }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="flex items-center justify-center rounded-2xl bg-g/90 px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10"
          >
            <span className="flex items-center gap-3 font-bold text-xl leading-tight sm:text-2xl">
              <span className="whitespace-nowrap">{translations.title1}</span>
              <Image
                src="/roller-coaster.svg"
                width={28}
                height={28}
                alt="roller-coaster"
                className="shrink-0"
              />
            </span>
          </motion.div>

          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{
              opacity: inView2 ? 1 : 0,
              y: 0,
              scale: inView2 ? 1 : 0.98,
            }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center rounded-2xl bg-g/90 px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10"
          >
            <span className="flex items-center gap-3 font-bold text-xl leading-tight sm:text-2xl">
              <Image
                src="/italy-flag.svg"
                width={28}
                height={28}
                alt="italy"
                className="shrink-0"
              />
              <span className="whitespace-nowrap">{translations.title2}</span>
            </span>
          </motion.div>

          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{
              opacity: inView3 ? 1 : 0,
              y: 0,
              scale: inView3 ? 1 : 0.98,
            }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center rounded-2xl bg-g/90 px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10"
          >
            <span className="flex items-center gap-2 font-bold text-xl leading-tight sm:text-2xl">
              <span className="flex items-center gap-1 text-yellow-300">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </span>
              <span className="whitespace-nowrap">{translations.title3}</span>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeaderClient;
