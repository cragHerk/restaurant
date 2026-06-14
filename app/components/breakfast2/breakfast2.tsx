import React from "react";
import Breakfast2Client from "./breakfast2-client";
import { useTranslations } from "next-intl";

const Breakfast2 = () => {
  const t = useTranslations("Breakfast2");
  const translations = {
    top: t("top"),
    top2: t("top2"),
    top3: t("top3"),
    desc: t("desc"),
    desc2: t("desc2"),
    desc3: t("desc3"),
    price: t("price"),
  };

  return <Breakfast2Client translations={translations} />;
};

export default Breakfast2;
