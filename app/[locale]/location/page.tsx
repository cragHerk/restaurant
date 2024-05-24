import { Metadata } from "next";
import Location from "./location";
import { useTranslations } from "next-intl";
export const metadata: Metadata = {
  title: "LOKALIZACJA",
  description: "LOKALIZACJA",
};

const page = () => {
  const t = useTranslations("Location");
  const translations = {
    title1: t("title1"),
    title2: t("title2"),
    adress: t("adress"),
    map: t("map"),
    open: t("open"),
    from: t("from"),
    to: t("to"),
  };
  return <Location translations={translations} />;
};

export default page;
