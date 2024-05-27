interface Stack {
  name: string;
  displayName: string;
  color: string;
}

export interface MyProject {
  period: string;
  title: string;
  name: string;
  displayName: string;
  role: string;
  front: Stack[];
  back?: Stack[];
  refactor?: Stack[];
  github: string;
  link: string;
  description: string[];
}

export const S3_URL =
  "https:/choigirang-portfolio.s3.ap-northeast-2.amazonaws.com/";

/** 2024/04/10 - 프로젝트 소개 */
export const projectsData: MyProject[] = [
  {
    period: "2024.04 ~ 2024.04",
    title: "Portfolio - v2",
    name: "portfolioV2",
    displayName: "포트폴리오 v2",
    role: "개인 프로젝트",
    front: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "nextdotjs", displayName: "Next.js", color: "#000000" },
      {
        name: "tailwindcss",
        color: "#06B6D4",
        displayName: "TailwindCss",
      },
    ],
    back: [],
    github: "https://github.com/choigirang/portfolio-v2",
    link: "https://choigirang-portfolio-version2.vercel.app/",
    description: [
      "소개를 위해 제작한 포트폴리오 version 2 입니다.",
      "*Next 14버전*을 사용하였습니다.",
      "웹과 모바일의 접근성을 높이기 위해 *반응형웹*으로 제작하였습니다.",
    ],
  },
  {
    period: "2024.03 ~ 2024.03",
    title: "Movie API를 이용한 영화 리스트",
    name: "movie",
    displayName: "Movie Calender",
    role: "개인 프로젝트",
    refactor: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "nextdotjs", displayName: "Next.js", color: "#000000" },
      { name: "redux", displayName: "RTK", color: "#764ABC" },
      { name: "tailwindcss", displayName: "Tailwind", color: "#05B6D3" },
    ],
    front: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "nextdotjs", displayName: "Next.js", color: "#000000" },
      { name: "reactquery", displayName: "React-Query", color: "#FF4154" },
      { name: "redux", displayName: "RTK", color: "#764ABC" },
      { name: "mui", displayName: "MUI", color: "#027FFE" },
    ],
    back: [],
    github: "https://github.com/choigirang/my-movie",
    link: "https://my-movie-tawny.vercel.app/",
    description: [
      "!Next 14 refactor",
      "SSR에 최적화된 스타일 적용을 위해 tailwind로 마이그레이션을 진행하였습니다.",
      "next-auth를 사용하여 소셜 로그인을 적용했습니다.",
      "useQuery를 제외하고 Next 14의 data fetching을 적극 활용하였습니다.",
      "라이브러리,컴포넌트,시멘틱 요소 등 최적화를 진행하여 80점대의 성능평가를 100점에 가깝게 개선하였습니다.",
      "!Next 13",
      "TMDB API를 활용해 제작한 프로젝트입니다.",
      "*RTK, next-redux-wrapper를 사용하여 SSR 환경에서 상태 관리를 하였습니다.*",
      "redux-persist를 사용하여 *페이지 전환 시에도 데이터를 유지*합니다.",
      "useInfiniteQuery를 활용한 무한 스크롤을 적용하였습니다.*",
    ],
  },
  {
    period: "2024.01 ~ 2024.02",
    title: "Portfolio - v1",
    name: "portfolio",
    displayName: "포트폴리오 v1",
    role: "개인 프로젝트",
    refactor: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "react", displayName: "React", color: "#1CCEFF" },
      { name: "reactquery", displayName: "React-query", color: "#FF475A" },
      { name: "tailwindcss", displayName: "Tailwind", color: "#05B6D3" },
      { name: "amazonec2", displayName: "EC2", color: "#F0921E" },
    ],
    front: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "react", displayName: "React", color: "#1CCEFF" },
      { name: "reactquery", displayName: "React-query", color: "#FF475A" },
      { name: "mui", displayName: "MaterialUi", color: "#027FFE" },
      { name: "framer", displayName: "Framer-motion", color: "#027FFE" },
    ],
    back: [],
    github: "https://github.com/choigirang/portfolio",
    link: "https://v1.choigirang-portfolio.site/",
    description: [
      "!Refactor",
      "SSR에 최적화된 스타일 적용을 위해 tailwind로 마이그레이션을 진행하였습니다.",
      "웹 표준을 준수하며 올바른 시멘틱 태그 사용을 통해 접근성, 권장사항을 각각 100점에 맞추었습니다.",
      "lazyloading, WebP, useMemo, useCallback 등을 이용하여 성능 평가를 50점대에서 100점으로 증가시킨 *최적화를 진행*하였습니다.",
      "웹과 모바일 등 접근성을 높이기 위해 *반응형웹*으로 제작하였습니다.",
      "*EC2를 이용하여 배포*하였습니다.",
      "!Before",
      "소개를 위해 제작한 프로젝트입니다.",
      "Typescript로 *데이터 형태의 다양한 타입들을 커스텀*하여 사용하였습니다.",
      "MUI를 사용하여 *테마 적용, TextFild, Tabs, Switch 등의 컴포넌트를 커스텀*하여 적용하였습니다.",
      "FramerMotion을 사용하여 *Tooltip 등에 대한 애니메이션을 적용*하였습니다.",
      "ReactQuery를 사용하여 *API 요청을 최소화* 하였습니다.",
    ],
  },
  {
    period: "2023.11 ~ 2023.11",
    title: "다양한 이벤트를 활용한 토이 프로젝트",
    name: "windows95",
    displayName: "Windows 95",
    role: "개인 프로젝트",
    refactor: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "nextdotjs", displayName: "Next.js", color: "#000000" },
      { name: "recoil", displayName: "Recoil", color: "#137EF5" },
      { name: "tailwindcss", displayName: "Tailwind", color: "#05B6D3" },
    ],
    front: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "nextdotjs", displayName: "Next.js", color: "#000000" },
      { name: "recoil", displayName: "Recoil", color: "#137EF5" },
      {
        name: "styledcomponents",
        displayName: "Styled-components",
        color: "#FF475A",
      },
    ],
    back: [],
    github: "https://github.com/choigirang/windows95",
    link: "https://choi-windows95.vercel.app/",
    description: [
      "!Next 14",
      "SSR에 최적화된 스타일 적용을 위해 tailwind로 마이그레이션을 진행하였습니다.",
      "!Next 13",
      "고전게임 포켓몬스터를 웹페이지에서 사용해보기 위해 제작한 프로젝트입니다.",
      "드래그 및 캐릭터 좌표 이동에 대한 *불필요한 렌더링 발생을 해결하기 위해 useMemo, useCallback*에 대해 학습하였습니다.",
      "Typescript로 *키보드, 마우스 등의 이벤트에 대한 타입을 학습하며 커스텀*하여 사용하였습니다.",
    ],
  },
  {
    period: "2023.07 ~ 2023.08",
    title: "CRUD를 위한 커뮤니티",
    name: "whyCommunity",
    displayName: "why-chat",
    role: "개인 프로젝트",
    refactor: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "nextdotjs", displayName: "Next.js", color: "#000000" },
      { name: "redux", displayName: "Redux", color: "#8348C4" },
      { name: "tailwindcss", displayName: "Tailwind", color: "#05B6D3" },
    ],
    front: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "nextdotjs", displayName: "Next.js", color: "#000000" },
      { name: "redux", displayName: "Redux", color: "#8348C4" },
      { name: "reactquery", displayName: "React-query", color: "#FF475A" },
      {
        name: "styledcomponents",
        displayName: "Styled-components",
        color: "#FF475A",
      },
    ],
    back: [
      { name: "express", displayName: "Express", color: "#000000" },
      { name: "mongodb", displayName: "MongDB", color: "#53B145" },
      { name: "jsonwebtokens", displayName: "JWT", color: "#D741FE" },
      { name: "amazonec2", displayName: "EC2", color: "#F0921E" },
      { name: "amazons3", displayName: "S3", color: "#53B145" },
    ],
    github: "https://github.com/choigirang/why-chat",
    link: "https://www.fe.why-chat.site",
    description: [
      "!Next 14",
      "SSR에 최적화된 스타일 적용을 위해 tailwind로 마이그레이션을 진행하였습니다.",
      "useQuery를 제외하고 Next 14의 data fetching을 적극 활용하였습니다.",
      "웹표준 시멘틱 태그, 동시 data fetching 최적화, dynamic import 등을 적용하여 각각의 웹 평가를 100점으로 개선하였습니다.",
      "!Next 13",
      "협업 프로젝트가 끝나고 부족한 부분을 학습하기 위해 제작한 커뮤니티입니다.",
      "*유저/게시글/댓글 CRUD, 좋아요, 검색* 기능들을 구현하였습니다.",
      "JWT를 이용해 직접 *access/refresh token을 만들어 관리하는 로직을 구현*해봄으로써 JWT와 쿠키를 이용한 *인증 방식에 대해 학습*하였습니다.",
      "ReactQuery를 이용해 *서버 요청을 최소화*시키며, *캐시 데이터를 사용하는 것을 학습*하였습니다.",
      "Redux를 이용해 *클라이언트 데이터를 저장하고 활용*하였습니다. ",
      "Express, MongoDB를 이용해 *서버를 구현하여 데이터 통신에 대해 학습*하였습니다.",
      "도메인을 구입하고 *AWS-Route53, ACM을 통해 SSL 인증하여 EC2로 배포*하였습니다.",
    ],
  },
  {
    period: "2023.04 ~ 2023.05",
    title: "BE & FE 팀 프로젝트",
    name: "sideQuest",
    displayName: "Side Quest",
    role: "팀 프로젝트 (FE 게시글 CRUD & Design)",
    front: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "nextdotjs", displayName: "Next.js", color: "#000000" },
      { name: "reactquery", displayName: "React-query", color: "#FF475A" },
      { name: "recoil", displayName: "Recoil", color: "#137EF5" },
      { name: "axios", displayName: "Axios", color: "#804C95" },
      {
        name: "styledcomponents",
        displayName: "Styled-components",
        color: "#FF475A",
      },
      { name: "amazonec2", displayName: "EC2", color: "#F0921E" },
    ],
    back: [],
    github: "https://github.com/codestates-seb/seb43_main_032",
    link: "https://www.sidequest.co.kr/",
    description: [
      "사이드 프로젝트를 진행할 수 있는 커뮤니티입니다.",
      "피그마를 이용한 화면 정의서 구현, 피드백을 받고 코드를 수정하는 과정을 겪으면서 *FE끼리 혹은 FE와 BE간의 대한 협업에 대한 전반적인 과정에 대해 경험*할 수 있었습니다.",
      "*API/인증 등에 대해 백엔드 개발자들과 협업*하는 과정을 통해 많은 얘기를 나누고 각자의 입장을 이해하는데 도움이 되었습니다.",
      "팀원으로 *게시글에 대한 CRUD, 검색, 전반적인 스타일 및 애니메이션 구현을 담당*하였습니다.",
      "*styled-components의 사용법*, *전역 세팅 방법*, *TypeScript 적용 방법을 이해*하고 코드에 적용했습니다",
    ],
  },
];
