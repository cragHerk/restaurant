import { Metadata } from "next";
import MenuComponent from "./menu";
export const metadata: Metadata = {
  title: "MENU",
  description: "Menu of Twins restaurant",
};

const page = () => {
  return <MenuComponent />;
};

export default page;
