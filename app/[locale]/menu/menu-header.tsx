import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="pt-[110px] md:pt-[140px] pb-[10px]  "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-8 w-[100vw] h-[300px]  lg:h-[500px] overflow-hidden static justify-center items-center flex ">
        <Image
          src="/menu/menu.jpg"
          width={400}
          height={400}
          alt="menu"
          objectFit="cover"
          className=" w-full h-[250px] lg:h-[400px]"
          quality={100}
        />
        <span className="absolute font-serif text-2xl md:text-3xl lg:text-7xl">
          MENU
        </span>
      </div>
    </motion.div>
  );
};

export default Header;
