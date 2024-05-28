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
      className="flex justify-center items-center flex-col bg-black text-g"
    >
      <div className="flex flex-col justify-center items-center bg-white bg-opacity-10 p-4 md:p-8 m-8 xl:mx-[10vw]">
        {" "}
        <motion.h1
          ref={ref1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView1 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold font-serif   text-center"
        >
          {translations.title}
        </motion.h1>
        <motion.span
          ref={ref2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView2 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="text-sm md:text-base opacity-70 w-2/3 mt-6 text-center"
        >
          {translations.description}
        </motion.span>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView3 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.27 }}
          className="p-2 mt-8  rounded bg-white opacity-60 text-black"
        >
          <ContactButton contact={contact} />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionClient;
