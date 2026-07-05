"use client";
import { FaPhoneVolume } from "react-icons/fa6";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Breakfast2Translations = {
  top: string;
  top2: string;
  top3: string;
  desc: string;
  desc2: string;
  desc3: string;
  price: string;
};

const Breakfast2Client = ({
  translations,
}: {
  translations: Breakfast2Translations;
}) => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  return (
    <section
      className="relative flex justify-center items-center flex-col overflow-hidden bg-black text-g py-12"
      aria-label="Breakfast2"
    >
      {/* decorative gold gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,214,10,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(255,214,10,0.10),_transparent_45%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.70))]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: inView1 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
          className="mx-auto flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur"
        >
          {/* small top accent */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-g/80 to-transparent" />
            <div className="h-2 w-2 rounded-full bg-g shadow-[0_0_18px_rgba(255,214,10,0.55)]" />
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-g/80 to-transparent" />
          </div>

          <motion.h1
            ref={ref2}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: inView2 ? 1 : 0, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="text-center text-4xl sm:text-5xl font-bold font-serif tracking-tight text-white"
          >
            {translations.top}
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: inView2 ? 1 : 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="text-center block text-g text-2xl sm:text-3xl underline p-1"
          >
            {translations.top2}
          </motion.span>

          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: inView3 ? 1 : 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-4 flex flex-col items-center justify-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="border border-white/25 rounded py-1 px-3 text-white/90">
                {translations.desc}
              </span>
              <span className="border border-white/25 rounded py-1 px-3 text-white/90">
                {translations.desc2}
              </span>
            </div>

            <span className="text-center py-3 text-white/80 max-w-xl">
              {translations.desc3}
            </span>

            <div className="mt-2 text-2xl text-g text-center">
              {translations.price}
              <span className="text-white"> 39 zł</span>

              <div className="flex items-center justify-center py-2">
                <FaPhoneVolume color="#a38954" size={25} />
                <span className="ml-2 font-bold text-white">
                  +48 536 265 668
                </span>
              </div>

              <span className="text-white border border-white/25 px-3 py-1 mt-4 rounded text-sm sm:text-base inline-block">
                Zator, Jana Pawła II 9/LU3
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Breakfast2Client;
