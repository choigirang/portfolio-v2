export interface MyProject {
  period: string;
  title: string;
  name: string;
  displayName: string;
  role: string;
  front: string[];
  back?: string[];
  github: string;
  link: string;
  description: string[];
}

export const S3_URL =
  "https:/choigirang-portfolio.s3.ap-northeast-2.amazonaws.com/";

/** 2024/04/10 - 프로젝트 소개 */
export const projectsData: MyProject[] = [
  //   my movie
  {
    period: "2024.04 ~ 2024.04",
    title: "Portfolio - v1",
    name: "portfolioV2",
    displayName: "포트폴리오 v2",
    role: "개인 프로젝트",
    front: [],
    back: [],
    github: "",
    link: "",
    description: [],
  },
  {
    period: "2024.03 ~ 2024.03",
    title: "Movie API를 이용한 영화 리스트",
    name: "movie",
    displayName: "Movie Calender",
    role: "개인 프로젝트",
    front: [],
    back: [],
    github: "",
    link: "",
    description: [],
  },
  {
    period: "2024.01 ~ 2024.02",
    title: "Portfolio - v1",
    name: "portfolio",
    displayName: "포트폴리오 v1",
    role: "개인 프로젝트",
    front: [],
    back: [],
    github: "",
    link: "",
    description: [],
  },
  {
    period: "2023.11 ~ 2023.11",
    title: "다양한 이벤트를 활용한 토이 프로젝트",
    name: "pokemon",
    displayName: "pokemon Choi",
    role: "개인 프로젝트",
    front: [],
    back: [],
    github: "",
    link: "",
    description: [],
  },
  {
    period: "2023.07 ~ 2023.08",
    title: "CRUD를 위한 커뮤니티",
    name: "whyCommunity",
    displayName: "why-chat",
    role: "개인 프로젝트",
    front: [],
    back: [],
    github: "",
    link: "",
    description: [],
  },
  {
    period: "2023.04 ~ 2023.05",
    title: "BE & FE 팀 프로젝트",
    name: "sideQuest",
    displayName: "Side Quest",
    role: "개인 프로젝트",
    front: [],
    back: [],
    github: "",
    link: "",
    description: [],
  },
];
