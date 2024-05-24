import { Metadata } from "next";
import Contact from "./contact";
export const metadata: Metadata = {
  title: "IMPREZY OKOLICZNOŚCIOWE",
  description: "IMPREZY OKOLICZNOŚCIOWE",
};

const page = () => {
  return <Contact />;
};

export default page;
