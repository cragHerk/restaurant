import { Metadata } from "next";
import Contact from "./contact";
export const metadata: Metadata = {
  title: "KONTAKT",
  description: "KONTAKT",
};

const page = () => {
  return <Contact />;
};

export default page;
