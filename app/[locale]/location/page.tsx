import Location from "./location";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: t("location"),
  };
}

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
