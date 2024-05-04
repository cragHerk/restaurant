export const metadata = {
  title: "LOKALIZACJA",
};
import Image from "next/image";
const Location = () => {
  return (
    <section className=" h-[calc(100vh-70px)] flex flex-col md:flex-row xl:justify-around justify-center items-center">
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
