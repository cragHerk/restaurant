"use client";
import { motion } from "framer-motion";
import ImagesGallery from "./Gallery/ImagesGallery";
import { images } from "./Gallery/images";
export default function Gallery({ translations }: any) {
  return (
    <section className=" bg-black text-g flex flex-col justify-center items-center w-full ">
      <motion.div
        className="   overflow-hidden  justify-center items-center flex flex-col mt-[220px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-[80px]  ">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full text-2xl md:text-4xl large:text-6xl font-serif font-bold  text-center "
          >
            {translations.gallery}
          </motion.span>
        </div>
        <ImagesGallery images={images} />
      </motion.div>
    </section>
  );
}
