import Party from "./party";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: t("party"),
  };
}

const page = () => {
  return <Party />;
};

export default page;
