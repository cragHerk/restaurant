import Party from "./party";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: t("party"),
  };
}

const page = () => {
  const t = useTranslations("Party");
  const translations = {
    title1: t("title1"),
    title2: t("title2"),
    description: t("description"),
    description2: t("description2"),
  };
  return <Party translations={translations} />;
};

export default page;
