"use client";
import { useMemo, useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const images = [
  {
    id: 1,
    mb: "/hero/mb-1.jpg",
    lg: "/hero/lg-1.jpg",
    title: "1.",
  },
  { id: 2, mb: "/hero/mb-2.jpg", lg: "/hero/lg-2.jpg", title: "2" },
  { id: 3, mb: "/hero/mb-3.jpg", lg: "/hero/lg-3.jpg", title: "3" },
  { id: 4, mb: "/hero/mb-4.jpg", lg: "/hero/lg-4.jpg", title: "4" },
  { id: 5, mb: "/hero/mb-5.jpg", lg: "/hero/lg-5.jpg", title: "5" },
];

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    const updateMatch = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addListener(updateMatch);
    updateMatch();
    return () => mediaQuery.removeListener(updateMatch);
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
            className="keen-slider__slide h-[calc(100vh-140px)]  lg:h-[calc(100vh-240px)]  "
          >
            <Image
              alt={image.title}
              src={isMobile ? image.mb : image.lg}
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Hero;
