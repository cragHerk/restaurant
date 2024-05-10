"use client";
import { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/hero/hero (1).jpg",
    title: "1.",
  },
  {
    id: 2,
    src: "/hero/hero (2).jpg",
    title: "2",
  },
  {
    id: 3,
    src: "/hero/hero (3).jpg",
    title: "3",
  },
  {
    id: 4,
    src: "/hero/hero (4).jpg",
    title: "4",
  },
  {
    id: 5,
    src: "/hero/hero (5).jpg",
    title: "5",
  },
  {
    id: 6,
    src: "/hero/hero (6).jpg",
    title: "6",
  },
];

const Hero = () => {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div ref={memoizedSliderRef} className="keen-slider ">
        {images.map((image) => (
          <div
            key={image.id}
            className="keen-slider__slide lg:h-[calc(85vh)] h-auto  "
          >
            <Image
              alt={image.title}
              src={image.src}
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
