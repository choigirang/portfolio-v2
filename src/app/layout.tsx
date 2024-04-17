import type { Metadata } from "next";
import "../style/global.css";
import Header from "./(home)/nav";
import TopBtn from "./(footer)/topBtn";

export const metadata: Metadata = {
  title: "최기랑 포트폴리오",
  description: "Girang's portfolio-v2",
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
