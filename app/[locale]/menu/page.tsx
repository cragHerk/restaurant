import { Metadata } from "next";
import Menu from "./menu";
export const metadata: Metadata = {
  title: "MENU",
  description: "Menu of Twins restaurant",
};

const page = () => {
  return <Menu />;
};

export default page;
