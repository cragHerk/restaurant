import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav/nav";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function Layout({
  children,
  params: { locale },
}: Readonly<LayoutProps>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
