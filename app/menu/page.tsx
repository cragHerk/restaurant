export const metadata = {
  title: "MENU",
};
import Image from "next/image";

const Menu = () => {
  return (
    <section className="h-screen lg:h-[calc(100vh-96px)]  ">
      <div className="relative flex flex-col lg:flex-row justify-center items-center w-full h-full pt-[140px] ">
        <div className="lg:mr-1 relative w-[400px] h-[300px] md:w-[650px] md:h-[500px]">
          <Image
            src="/menu/menu-1.png"
            alt="menu"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="lg:ml-1 relative w-[400px] h-[300px] md:w-[650px] md:h-[500px]">
          <Image
            src="/menu/menu-2.png"
            alt="menu"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
