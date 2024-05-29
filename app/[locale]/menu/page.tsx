import { Metadata } from "next";
import Menu from "./menu";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: t("menu"),
  };
}

const page = () => {
  const t = useTranslations("MenuHeader");
  const translations = {
    title1: t("title1"),
    title2: t("title2"),
  };
  return <Menu translations={translations} />;
};

export default page;
