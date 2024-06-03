import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "TWINS restaurant",
    template: "%s | TWINS restaurant",
  },
  description:
    "Restauracja w Zatorze, smaczne jedzenie, pizza, burgery, blisko energylandii. Restaurant in Zator, tasty food, pizza, burgers, close to energylandia. ",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
