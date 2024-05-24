import { Metadata } from "next";
import Menu from "./menu";
import { useTranslations } from "next-intl";
export const metadata: Metadata = {
  title: "MENU",
  description: "Menu of Twins restaurant",
};

const page = () => {
  const t = useTranslations("MenuHeader");
  const translations = {
    title1: t("title1"),
    title2: t("title2"),
  };
  return <Menu translations={translations} />;
};

export default page;
