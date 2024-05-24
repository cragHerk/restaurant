import SectionClient from "./section-client";
import { useTranslations } from "next-intl";

const Section = () => {
  const t = useTranslations("Section");
  const translations = {
    title: t("title"),
    description: t("description"),
    title2: t("title2"),
    contact: t("contact"),
  };
  return <SectionClient translations={translations} />;
};

export default Section;
