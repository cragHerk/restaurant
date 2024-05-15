"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Location = () => {
  return (
    <section className="  flex flex-col  text-g justify-center items-center bg-black">
      <motion.div
        className=" pt-[140px] "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[100vw] lg:h-[calc(70vh)] h-auto static ">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-8xl font-semibold absolute left-[calc(50vw-320px)] top-[50%]"
          >
            LOKALIZACJA
          </motion.span>
          <Image
            src="/2.jpg"
            width={100}
            height={100}
            alt="menu"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </motion.div>
      <div className="p-[25px] mt-[130px] md:mt-[170px]">
        {" "}
        <a
          href="https://www.google.com/maps/place/Twins+Restaurant/@49.9929603,19.4289826,17z/data=!4m14!1m7!3m6!1s0x47168dc4442d5e1f:0x1be216c68caf475d!2sTwins+Restaurant!8m2!3d49.9929569!4d19.4315575!16s%2Fg%2F11s_kdbnl4!3m5!1s0x47168dc4442d5e1f:0x1be216c68caf475d!8m2!3d49.9929569!4d19.4315575!16s%2Fg%2F11s_kdbnl4?entry=ttu"
          className="text-xl p-3 lg:text-2xl  pointer bg-white  md:p-3 md:w-[250px] md:h-[350px]  rounded md:ml-8"
        >
          Jana Pawła II 9, 32-640 Zator
        </a>
        <a
          href="https://storyset.com/app"
          aria-label="car"
          className="hidden md:block xl:mt-8"
        >
          <Image src="/location/car.svg" width={500} height={300} alt="car" />
        </a>
      </div>

      <div className=" relative w-[300px] h-[300px] md:w-[550px] md:h-[550px] opacity-70 md:mt-[140px]">
        <Image
          src="/location/location.png"
          alt="menu"
          fill
          style={{
            objectFit: "contain",
          }}
          className="rounded"
        />
      </div>
    </section>
  );
};

export default Location;
