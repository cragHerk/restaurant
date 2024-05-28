import SectionClientBot from "./section-client-bot";
import { useTranslations } from "next-intl";

const SectionBot = () => {
  const t = useTranslations("Section");
  const translations = {
    title2: t("title2"),
  };
  return <SectionClientBot translations={translations} />;
};

export default SectionBot;
