import type { Metadata } from "next";
import "./style/global.css";
import Header from "./(home)/nav";
import TopBtn from "./(footer)/topBtn";
import { getMetadata } from "./assets/metaData";

export const generateMetadata = async () => {
  return getMetadata();
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <Header />
        {children}
        <TopBtn />
      </body>
    </html>
  );
}
