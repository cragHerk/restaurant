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
      <div className="w-[100vw] h-[300px]  lg:h-[500px] overflow-hidden static justify-center items-center flex ">
        <Image
          src="/menu/menu.png"
          width={100}
          height={100}
          alt="menu"
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </motion.div>
  );
};

export default Header;
