import { Metadata } from "next";
import Location from "./location";
export const metadata: Metadata = {
  title: "LOKALIZACJA",
  description: "LOKALIZACJA",
};

const page = () => {
  return <Location />;
};

export default page;
