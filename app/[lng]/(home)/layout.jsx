//"use client";
import { dir } from "i18next";
import { languages } from "@/app/i18n/settings";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const siteTitle = "MyWebClass.org";

export const metadata = {
  title: siteTitle,
  description: "MyWebClass Website",
};
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body id="flex-wrapper">
        <Navbar lng={lng} />
        <div className="spacer"></div>
        <main>{children}</main>
        <Footer lng={lng} />
      </body>
    </html>
  );
}
