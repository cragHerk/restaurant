import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SectionHeader = () => {
  return (
    <div
      id="section-header"
      className="bg-black h-[220px] md:h-[145px] lg:h-[100px] flex-wrap flex justify-center pt-[10px] lg:pt-0 lg:items-center "
    >
      <div className="flex flex-wrap items-center justify-around h-14 w-full">
        <div className=" flex items-center justify-center bg-gold opacity-60 h-14 w-[330px] mt-1 sm:mt-0 lg:mt-0 mb-3 lg:mb:0">
          <span className="font-bold text-2xl flex items-center">
            2 km od Energylandii{" "}
            <Image
              src="roller-coaster.svg"
              width={30}
              height={30}
              alt="roller-coaster"
              className="ml-3"
            />
          </span>
        </div>
        <div className="flex items-center justify-center bg-gold opacity-60 h-14 w-[330px]  mb-3 lg:mb:0">
          <span className="font-bold text-2xl flex items-center ">
            <Image
              src="italy-flag.svg"
              width={30}
              height={30}
              alt="italy"
              className="mr-3"
            />
            Kuchnia włoska
          </span>
        </div>
        <div className="  flex items-center justify-center bg-gold opacity-60 h-14 w-[330px] mb-3 lg:mb:0 ">
          <span className=" font-bold text-2xl flex items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf /> Recenzje Google
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
