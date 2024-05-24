import NavClient from "./nav-client";
import { useTranslations } from "next-intl";

const Section = () => {
  const t = useTranslations("Nav");
  const translations = {
    main: t("main"),
    menu: t("menu"),
    location: t("location"),
    party: t("party"),
    gallery: t("gallery"),
  };
  return <NavClient translations={translations} />;
};

export default Section;
