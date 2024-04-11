export interface MyProject {
  title: string;
  name: string;
  github: string;
  link: string;
  description: string[];
  thumbnail: string;
  img: string[];
}

export const S3_URL =
  "https:/choigirang-portfolio.s3.ap-northeast-2.amazonaws.com/";

/** 2024/04/10 - 프로젝트 소개 */
export const projectsData: MyProject[] = [
  //   my movie
  {
    title: "Movie API를 이용한 영화 리스트",
    name: "Movie Calender",
    github: "",
    link: "",
    description: [],
    thumbnail: `movie/movie1.gif`,
    img: ["movie/movie1.gif", "movie/movie2.gif", "movie/movie3.gif"],
  },
  {
    title: "Portfolio - v1",
    name: "portfolio",
    github: "",
    link: "",
    description: [],
    thumbnail: `portfolio/portfolio1.gif`,
    img: [],
  },
  {
    title: "다양한 이벤트를 활용한 토이 프로젝트",
    name: "pokemon",
    github: "",
    link: "",
    description: [],
    thumbnail: `pokemon/pokemon1.png`,
    img: [],
  },
  {
    title: "CRUD를 위한 커뮤니티",
    name: "whyCommunity",
    github: "",
    link: "",
    description: [],
    thumbnail: `whyCommunity/whyCommunity1.png`,
    img: [],
  },
  {
    title: "BE & FE 팀 프로젝트",
    name: "sideQuest",
    github: "",
    link: "",
    description: [],
    thumbnail: `sideQuest/sideQuest1.gif`,
    img: [],
  },
];
