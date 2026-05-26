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
    <div
      className="truncate bg-g relative justify-center items-center flex flex-col"
      aria-label="Section menu"
    >
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
        // Na mobile zwiększamy wysokość grafiki, żeby sekcja nie była „za niska”
        width={isMobile ? 768 : isLarge ? 900 : 1200}
        height={isMobile ? 520 : 500}
        alt="section"
        quality={100}
        priority={false}
        sizes={isMobile ? "(max-width: 768px) 100vw" : "1200px"}
        className="h-auto w-full"
      />

      {/* overlay */}
      <div className="absolute top-[14.5vw] sm:top-[120px] flex flex-col justify-center items-center px-2">
        <motion.h1
          ref={ref1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView1 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-9xl font-serif z-20 leading-none"
        >
          MENU
        </motion.h1>

        <motion.span
          ref={ref2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView2 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-2 text-sm sm:text-base text-grey2 font-bold"
        >
          {translations.title2}
        </motion.span>

        <Link href={`/${localActive}/menu`} className="">
          <motion.button
            ref={ref3}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView3 ? 1 : 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="m-2 sm:m-2 px-[16px] sm:px-[18px] py-[12px] sm:py-[13px] md:py-[14px] min-w-[170px] sm:min-w-[160px] rounded-xl  text-lg sm:text-xl md:text-2xl font-extrabold cursor-pointer  ring-1  transition-all duration-300 hover:scale-[1.06] hover:brightness-110 active:scale-[1.02] "
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
