import Image from "next/image";
import { useTranslations } from "next-intl";
const Top = () => {
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
      <span>Danie wegetariańskie</span>
      <span className="ml-9">Wykaz alergenów dostępny u obsługi</span>
    </div>
  );
};

export default Top;
