"use client";
import { useMemo, useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const images = [
  {
    id: 1,
    mb: "/hero/black-burger.jpg",
    lg: "/hero/black-burger.jpg",
    title: "1.",
  },
  {
    id: 2,
    mb: "/hero/lemonade-mb.jpg",
    lg: "/hero/lemonade-lg.jpg",
    title: "2",
  },
  { id: 3, mb: "/hero/pasta-mb.jpg", lg: "/hero/pasta-mb.jpg", title: "3" },
  {
    id: 4,
    mb: "/hero/purple-dish-mb.jpg",
    lg: "/hero/purple-dish-lg.jpg",
    title: "4",
  },
  { id: 5, mb: "/hero/tomato-mb.jpg", lg: "/hero/tomato-lg.jpg", title: "5" },
  { id: 6, mb: "/hero/pizza-mb.jpg", lg: "/hero/pizza-lg.jpg", title: "6" },
];

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    const updateMatch = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateMatch);
    updateMatch();
    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
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
    ]
  );

  const memoizedSliderRef = useMemo(() => sliderRef, [sliderRef]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-[140px]"
    >
      <div ref={memoizedSliderRef} className="keen-slider  ">
        {images.map((image) => (
          <div
            key={image.id}
            className="keen-slider__slide relative  h-[calc(100vh-140px)]  lg:h-[calc(100vh-240px)]  "
          >
            <Image
              key={image.id}
              alt={image.title}
              src={isMobile ? image.mb : image.lg}
              fill
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Hero;
