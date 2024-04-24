import { Metadata } from "next";

interface MetadataProps {
  [key: string]: string;
}

export const META = {
  title: "최기랑 | 포트폴리오",
  siteName: "choigirang's portfolio",
  description: "Portfolio v2 입니다.",
  keyword: ["포트폴리오", "프론트엔드", "이력서"],
  url: "https://choigirang-portfolio-version2.vercel.app/",
  googleVerification: process.env.GOOGLE || "",
  naverVerification: process.env.NAVER || "",
  ogImage: "/img.jpg",
} as const;

export const getMetadata = (metadataProps?: MetadataProps) => {
  const { title, description, asPath } = metadataProps || {};

  const TITLE = title ? `${title}` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath ? META.url + asPath : META.url;
  const OG_IMAGE = META.ogImage;

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keyword],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: "ko_KR",
      type: "website",
      url: PAGE_URL,
      images: {
        url: OG_IMAGE,
      },
    },
    verification: {
      google: META.googleVerification,
      other: {
        "naver-site-verification": META.naverVerification,
      },
    },
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: OG_IMAGE,
      },
    },
  };

  return metadata;
};
