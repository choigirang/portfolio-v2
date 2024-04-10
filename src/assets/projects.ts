export interface MyProject {
  title: string;
  name: string;
  github: string;
  link: string;
  description: string[];
  thumbnail: string;
}

/** 2024/04/10 - 프로젝트 소개 */
export const projectsData: MyProject[] = [
  //   my movie
  {
    title: "Movie API를 이용한 영화 리스트",
    name: "Movie Calender",
    github: "",
    link: "",
    description: [],
    thumbnail: "https:/choigirang-portfolio.s3.ap-northeast-2.amazonaws.com",
  },
  {
    title: "Portfolio - v1",
    name: "portfolio",
    github: "",
    link: "",
    description: [],
    thumbnail:
      "https:/choigirang-portfolio.s3.ap-northeast-2.amazonaws.com/portfolio/portfolio1.gif",
  },
  {
    title: "다양한 이벤트 활용한 토이 프로젝트",
    name: "pokemon",
    github: "",
    link: "",
    description: [],
    thumbnail:
      "https:/choigirang-portfolio.s3.ap-northeast-2.amazonaws.com/pokemon/pokemon1.png",
  },
  {
    title: "CRUD를 위한 커뮤니티",
    name: "whyCommunity",
    github: "",
    link: "",
    description: [],
    thumbnail:
      "https:/choigirang-portfolio.s3.ap-northeast-2.amazonaws.com/whyCommunity/whyCommunity1.png",
  },
  {
    title: "BE & FE 팀 프로젝트",
    name: "sideQuest",
    github: "",
    link: "",
    description: [],
    thumbnail:
      "https:/choigirang-portfolio.s3.ap-northeast-2.amazonaws.com/sideQuest/sideQuest1.gif",
  },
];
