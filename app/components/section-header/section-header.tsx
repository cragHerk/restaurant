import SectionHeaderClient from "./section-header-client";
import { useTranslations } from "next-intl";
const SectionHeader = () => {
  const t = useTranslations("SectionHeader");
  const translations = {
    title1: t("title1"),
    title2: t("title2"),
    title3: t("title3"),
  };
  return <SectionHeaderClient translations={translations} />;
};

export default SectionHeader;
