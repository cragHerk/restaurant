"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useLocale } from "next-intl";
import { useMediaQuery } from "../../utils/useMediaQuery";

const SectionClientBot = ({
  translations,
}: {
  translations: {
    title2: string;
  };
}) => {
  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(900);
  const isLarge = useMediaQuery(1200);
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const localActive = useLocale();

  return (
    <div className="truncate  bg-g   relative justify-center items-center flex flex-col">
      <Image
        src={
          isMobile
            ? "/section-bot/section-mb.png"
            : isTablet
            ? "/section-bot/section-t.png"
            : isLarge
            ? "/section-bot/section-lg.png"
            : "/section-bot/section-d.png"
        }
        width={isLarge ? (isMobile ? 768 : 900) : 1200}
        height={isMobile ? 420 : 500}
        alt="section"
        quality={100}
      />
      <div className="absolute top-[10vw] sm:top-[110px] flex flex-col justify-center items-center">
        <motion.h1
          ref={ref1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView1 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" text-7xl md:text-9xl font-serif z-20  "
        >
          MENU
        </motion.h1>
        <motion.span
          ref={ref2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView2 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm  text-grey2 font-bold"
        >
          {translations.title2}
        </motion.span>
        <Link href={`/${localActive}/menu`} className="">
          <motion.button
            ref={ref3}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView3 ? 1 : 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-[80px] p-1 m-2 rounded bg-white text-xl font-bold cursor-pointer"
            type="button"
          >
            Menu
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default SectionClientBot;
