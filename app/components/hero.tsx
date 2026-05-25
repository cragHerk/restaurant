"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
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
        <div className="relative h-[calc(100vh-140px)]">
          <Image
            alt="black burger"
            src="/hero/black-burger copy.jpg"
            fill
            objectFit="cover"
          />
        </div>
      ) : (
        <DesktopHeroCarousel />
      )}
    </motion.div>
  );
};

export default Hero;
