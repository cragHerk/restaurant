export const metadata = {
  title: "MENU",
};
import Image from "next/image";

const Menu = () => {
  return (
    <section className="  ">
      <div className=" pt-[140px] ">
        <div className="w-[100vw] lg:h-[calc(70vh)] h-auto static ">
          <span className="text-8xl absolute ">MENU</span>
          <Image
            src="/2.jpg"
            width={100}
            height={100}
            alt="menu"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
