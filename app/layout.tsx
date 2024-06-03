import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "TWINS restaurant",
    template: "%s | TWINS restaurant",
  },
  metadataBase: new URL("https://twins-restaurant.pl"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "pl-PL": "/PL",
    },
  },
  description:
    "Restauracja w Zatorze, smaczne jedzenie, pizza, burgery, blisko energylandii. Restaurant in Zator, tasty food, pizza, burgers, close to energylandia. ",
  openGraph: {
    title: "Twins Restaurant",
    description: "Black burger, gold burger, ",
    url: "www.twins-restaurant.pl",
    siteName: "TWINS Restaurant",
    images: [{ url: "/hero/black-burger.jpg", width: 1260, height: 800 }],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
