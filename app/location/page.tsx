export const metadata = {
  title: "LOKALIZACJA",
};
import Image from "next/image";
const Location = () => {
  return (
    <section className=" h-[calc(100vh-70px)] flex flex-col  justify-center items-center">
      <h1 className="text-3xl ">Jana Pawła II 9, 32-640 Zator</h1>
      <div className=" relative w-[300px] h-[300px] md:w-[574px] md:h-[574px] opacity-70">
        <Image
          src="/location/location.png"
          alt="menu"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </section>
  );
};

export default Location;
