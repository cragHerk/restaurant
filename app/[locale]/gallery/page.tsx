import Gallery from "./gallery";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: t("gallery"),
  };
}

const page = () => {
  return <Gallery />;
};

export default page;
