import React from "react";
import BreakfastClient from "./breakfast-client";
import { useTranslations } from "next-intl";

const Breakfast = () => {
  const t = useTranslations("Breakfast");
  const translations = {
    top: t("top"),
    top2: t("top2"),
    top3: t("top3"),
    desc: t("desc"),
    desc2: t("desc2"),
    desc3: t("desc3"),
    price: t("price"),
  };
  return <BreakfastClient translations={translations} />;
};

export default Breakfast;
