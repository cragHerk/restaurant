import { Metadata } from "next";
import Gallery from "./gallery";
export const metadata: Metadata = {
  title: "GALERIA",
  description: "GALERIA",
};

const page = () => {
  return <Gallery />;
};

export default page;
