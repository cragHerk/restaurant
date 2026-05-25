"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const images = [
  {
    id: 1,
    mb: "/hero/black-burger.webp",
    lg: "/hero/black-burger.webp",
    title: "1.",
  },
  {
    id: 2,
    mb: "/hero/lemonade-mb.webp",
    lg: "/hero/lemonade-lg.webp",
    title: "2",
  },
  { id: 3, mb: "/hero/pasta-mb.webp", lg: "/hero/pasta-mb.webp", title: "3" },
  {
    id: 4,
    mb: "/hero/purple-dish-mb.webp",
    lg: "/hero/purple-dish-lg.webp",
    title: "4",
  },
  { id: 5, mb: "/hero/tomato-mb.jpg", lg: "/hero/tomato-lg.webp", title: "5" },
  { id: 6, mb: "/hero/pizza-mb.webp", lg: "/hero/pizza-lg.webp", title: "6" },
];

function DesktopHeroCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
    },
    [
      useCallback((slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });

          nextTimeout();

          slider.slides.forEach((slide) => {
            slide.style.display = "block";
          });
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      }, []),
    ],
  );

  const memoizedSliderRef = useMemo(() => sliderRef, [sliderRef]);

  return (
    <div ref={memoizedSliderRef} className="keen-slider">
      {images.map((image) => (
        <div
          key={image.id}
          className="keen-slider__slide relative h-[calc(100vh-140px)] lg:h-[calc(100vh-240px)]"
        >
          <Image alt={image.title} src={image.lg} fill objectFit="cover" />
        </div>
      ))}
    </div>
  );
}

const MobileLocaleLinks = () => {
  const locale = useLocale();

  return (
    <>
      <Link
        href={`/${locale}/menu`}
        className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-black shadow-sm hover:bg-amber-300 transition"
      >
        Zobacz menu
      </Link>
      <Link
        href={`/${locale}/location`}
        className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
      >
        Lokalizacja
      </Link>
    </>
  );
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    const updateMatch = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateMatch);
    updateMatch();

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-[140px]"
    >
      {isMobile ? (
        <div className="relative h-[60vh] min-h-[360px] max-h-[520px] overflow-hidden">
          <Image
            alt="black burger"
            src="/hero/black-burger.webp"
            fill
            priority
            objectFit="cover"
            objectPosition="center top"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/70" />

          <div className="absolute inset-0 flex flex-col justify-end px-4 pb-8">
            <div className="max-w-[28rem]">
              <p className="text-sm font-semibold tracking-wide text-amber-200">
                TWINS RESTAURANT
              </p>
              <h1 className="mt-2 text-3xl font-bold leading-tight text-white">
                Smak, który zostaje w pamięci
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Burgery, makarony i dania z najlepszych składników — idealne na
                każdą okazję.
              </p>

              <div className="mt-5 flex gap-3">
                <MobileLocaleLinks />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <DesktopHeroCarousel />

          {/* desktop overlay + "interactive" text */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.75),rgba(0,0,0,0.25)_45%,rgba(0,0,0,0)_70%)]" />

            <div className="absolute bottom-10 left-0 right-0 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-[42rem]">
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="pointer-events-none text-sm font-semibold tracking-wide text-amber-200"
                >
                  TWINS RESTAURANT
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="mt-2 text-4xl font-bold leading-tight text-white sm:text-5xl"
                >
                  Smak, który zostaje w pamięci
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg"
                >
                  Burgery, makarony i dania z najlepszych składników — idealne
                  na każdą okazję.
                </motion.p>

                <div className="mt-6 pointer-events-auto flex gap-3">
                  <MobileLocaleLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Hero;
