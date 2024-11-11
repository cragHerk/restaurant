import React from "react";
import BreakClient from "./break-client";
import { useTranslations } from "next-intl";

const Break = () => {
  const t = useTranslations("Break");
  const translations = {
    top: t("top"),
    top2: t("top2"),
  };
  return <BreakClient translations={translations} />;
};

export default Break;
