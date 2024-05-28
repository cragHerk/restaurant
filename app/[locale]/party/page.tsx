import { Metadata } from "next";
import Party from "./party";
export const metadata: Metadata = {
  title: "IMPREZY OKOLICZNOŚCIOWE",
  description: "IMPREZY OKOLICZNOŚCIOWE",
};

const page = () => {
  return <Party />;
};

export default page;
