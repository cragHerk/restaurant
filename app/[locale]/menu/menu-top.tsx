import Image from "next/image";

const Top = ({ translations }: any) => {
  // const t = useTranslations("SectionHeader");
  return (
    <div className="flex flex-wrap items-center justify-center text-white opacity-70 mb-4  ">
      {" "}
      <Image
        src="/leaf.svg"
        width={30}
        height={30}
        alt="leaf"
        className="mr-4"
      />
      <span>{translations.title1}</span>
      <span className="ml-9">{translations.title2}</span>
    </div>
  );
};

export default Top;
