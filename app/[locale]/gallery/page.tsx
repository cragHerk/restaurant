import Gallery from "./gallery";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: t("gallery"),
  };
}

const page = () => {
  const t = useTranslations("Gallery");
  const translations = {
    gallery: t("gallery"),
  };
  return <Gallery translations={translations} />;
};

export default page;
