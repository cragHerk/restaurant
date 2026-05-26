"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactButton from "../contact-button";

const SectionClient = ({
  translations,
}: {
  translations: {
    title: string;
    description: string;
    title2: string;
    contact: string;
  };
}) => {
  const contact = translations.contact;

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  return (
    <section
      id="section"
      className="relative flex justify-center items-center flex-col overflow-hidden bg-black text-g"
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
        <div className="mx-auto flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 mt-10 mb-12 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur">
          {/* small top accent */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-g/80 to-transparent" />
            <div className="h-2 w-2 rounded-full bg-g shadow-[0_0_18px_rgba(255,214,10,0.55)]" />
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-g/80 to-transparent" />
          </div>

          <motion.h1
            ref={ref1}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: inView1 ? 1 : 0, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="text-center text-2xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight"
          >
            {translations.title}
          </motion.h1>

          <motion.p
            ref={ref2}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: inView2 ? 1 : 0, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="mt-5 max-w-2xl text-center text-sm sm:text-base md:text-lg text-white/80"
          >
            {translations.description}
          </motion.p>

          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: inView3 ? 1 : 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="mt-8 w-full flex items-center justify-center"
          >
            <div className="rounded-2xl bg-white/10 p-2 ring-1 ring-white/15">
              <ContactButton contact={contact} />
            </div>
          </motion.div>

          {/* bottom shimmer */}
          <div
            aria-hidden
            className="mt-10 h-px w-full bg-[linear-gradient(to_right,transparent,rgba(255,214,10,0.6),transparent)]"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionClient;
