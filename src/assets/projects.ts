interface Stack {
  name: string;
  displayName: string;
  color: string;
}

type Des = {
  title: string;
  detail: string[];
};

export interface MyProject {
  period: string;
  title: string;
  name: string;
  displayName: string;
  role: string;
  summary: string;
  front: Stack[];
  back?: Stack[];
  refactor?: Stack[];
  github: string;
  link: string;
  description: Des[];
}

export const S3_URL =
  "https:/choigirang-portfolio.s3.ap-northeast-2.amazonaws.com/";

/** 2024/04/10 - 프로젝트 소개 */
export const projectsData: MyProject[] = [
  {
    period: "2024.06 ~ 2024.06",
    title: "front를 위한 dev quiz",
    name: "quiz",
    displayName: "front를 위한 dev quiz",
    role: "개인 프로젝트",
    summary:
      "개발 관련 퀴즈를 풀고 사용자의 랭킹을 확인할 수 있는 프로젝트입니다.",
    front: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "react", displayName: "React", color: "#000000" },
      { name: "redux", displayName: "Redux", color: "#764ABC" },
      { name: "reactquery", displayName: "React-Query", color: "#FF4154" },
      {
        name: "tailwindcss",
        color: "#06B6D4",
        displayName: "TailwindCss",
      },
      { name: "firebase", displayName: "Firebase", color: "#DC2C01" },
    ],
    back: [],
    github: "https://github.com/choigirang/quiz",
    link: "https://www.dev-quiz.store/",
    description: [
      {
        title:
          "*Router를 학습하고 사용자의 선택에 따른 빠른 구동을 위해 React를 사용*하였습니다.",
        detail: [
          "React-router를 사용하여 페이지 전환을 구현하였으며, 선택한 데이터에 대한 페이지 전환을 위해 중첩 라우터를 사용하였습니다.",
          "데이터를 불러오는 시간과 경우를 축소하기 위해 동적 import를 사용하였습니다.",
          "문제를 풀고 종합 해설지를 볼 때, 랭킹과 사용자 분포도에 대한 차트를 볼 때 공통적으로 사용되는 코드를 줄이기 위해 재사용 가능한 컴포넌트를 작성하였습니다.",
          "useMemo, useCallback, React.memo 를 사용하여 렌더링을 최소화하였습니다.",
          "데이터 선택, 문제 제출 등에 대한 hook을 작성하여 코드를 최소화하였습니다.",
          "CSR의 SEO 취약점을 해결하기 위해 sitemap 생성기를 설정하여 각 페이지에 대한 정보를 설정하였습니다.",
        ],
      },
      {
        title:
          "*타입 에러를 통한 프로젝트 안정성을 높이기 위해 typescript를 사용하였습니다.*",
        detail: [
          "비동기 데이터 응답값에 대한 타입을 작성하였습니다.",
          "재사용 컴포넌트의 props에 대한 타입 가드를 사용하여 작성하였습니다.",
        ],
      },
      {
        title:
          "*RTK, redux-persist를 사용하여 페이지 전환, 새로고침 시 데이터를 유지합니다.*",
        detail: [
          "퀴즈를 풀다가 랭킹을 보거나, 해설집을 보다가 퀴즈를 푸는 등의 페이지 전환이 일어나거나 새로고침 시에도 이전에 선택했던 데이터와 풀고 있던 퀴즈를 유지할 수 있습니다.",
          "문제를 동적 import로 가져온 후, 무작위로 사용자에게 제공되기 때문에 초기에 저장된 문제, 제출 완료한 문제를 저장하여 사용합니다.",
        ],
      },
      {
        title:
          "*react-query를 사용하여 사용자에 대한 정보와 랭킹 등 API요청을 최소화하였습니다.*",
        detail: [
          "API 요청에 대한 custom hook을 만들어 반복되는 로직을 최소화하였습니다.",
          "hook 사용 시, 선택한 값이 없음에도 동작하는 것을 방지하기 위해 최초 실행을 방지하고, refetch를 통해 데이터를 받아옵니다.",
          "react-query의 캐시를 사용하여 이전에 불러온 데이터가 있을 시 이를 활용합니다.",
        ],
      },
      {
        title:
          "다양한 기기의 접근성을 높이기 위해 *반응형 웹으로 작성*하였습니다.",
        detail: [
          "화면 크기에 따라 레이아웃과 스타일을 변경하여 사용자가 다양한 기기에서 접근이 가능하고, 기기 별 편의성을 높였습니다.",
        ],
      },
      {
        title:
          "*firebase storage에 값을 저장하고 사용하며 API 요청과 response에 대해 학습*하였습니다.",
        detail: [],
      },
    ],
  },
  {
    period: "2024.04 ~ 2024.04",
    title: "Portfolio - v2",
    name: "portfolioV2",
    displayName: "포트폴리오 v2",
    role: "개인 프로젝트",
    summary: "포트폴리오 version 2 입니다.",
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
      {
        title: "SSR 및 SEO 적용을 위해 *Next 14*로 제작하였습니다.",
        detail: [
          "아래와 같은 이유로 SSR 방식에 이점이 있다고 생각하여 Next.js를 선택하였습니다.",
          "원 페이지로 제작하였기 때문에 페이지 이동이 없어, 빠른 화면 로드를 목적으로 한다.",
          "서버에서 데이터를 가져오지 않기 때문에 초기 로딩 속도가 느려지지 않는다.",
          "포트폴리오이기에 검색엔진 최적화가 필요하다.",
        ],
      },
      {
        title:
          "*타입 에러를 통한 프로젝트 안정성을 높이기 위해 typescript를 사용하였습니다.*",
        detail: [
          "프로젝트 및 기술 스택에 대한 데이터를 유니온 타입과 유틸리티 타입을 사용하여 작성하였습니다.",
          "재사용 컴포넌트의 props에 대한 타입 가드를 사용하여 작성하였습니다.",
        ],
      },
      {
        title:
          "필요에 따라 *클라이언트 / 서버 컴포넌트를 분리*하여 작성하였습니다.",
        detail: [
          "data를 props로 활용하고, children을 사용하여 클라이언트 컴포넌트 안에서 서버 컴포넌트를 사용하였습니다.",
          "클라이언트 컴포넌트에서 useMemo, useCallback, React.memo 를 사용하여 최적화 하였습니다.",
          "아코디언, 툴팁 등의 애니메이션이 필요한 컴포넌트를 분리하였습니다.",
        ],
      },
      {
        title:
          "*Next.js에 최적화된 스타일 적용을 위해 tailwind*를 사용하였습니다.",
        detail: [
          "가독성을 높이기 위해 반복되는 스타일을 미리 선언하여 적용하였습니다.",
          "커스텀 테마를 사용하여 스타일을 적용할 수 있습니다.",
        ],
      },
      {
        title: "모바일에서도 접근하기 위해 *반응형 웹으로 작성*하였습니다.",
        detail: [],
      },
    ],
  },
  {
    period: "2024.03 ~ 2024.03",
    title: "Movie API를 이용한 영화 리스트",
    name: "movie",
    displayName: "Movie Calender",
    summary:
      "TMDB API를 이용하여 영화 목록과 영화 계획표를 작성하기 위한 프로젝트입니다.",
    role: "개인 프로젝트",
    refactor: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "nextdotjs", displayName: "Next.js", color: "#000000" },
      { name: "axios", displayName: "Axios", color: "#884798" },
      { name: "redux", displayName: "RTK", color: "#764ABC" },
      { name: "tailwindcss", displayName: "Tailwind", color: "#05B6D3" },
    ],
    front: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "nextdotjs", displayName: "Next.js", color: "#000000" },
      { name: "reactquery", displayName: "React-Query", color: "#FF4154" },
      { name: "axios", displayName: "Axios", color: "#884798" },
      { name: "redux", displayName: "RTK", color: "#764ABC" },
      { name: "mui", displayName: "MUI", color: "#027FFE" },
    ],
    back: [],
    github: "https://github.com/choigirang/my-movie",
    link: "https://my-movie-tawny.vercel.app/",
    description: [
      {
        title:
          "*pages 방식으로 작성된 Next13에서, Next 14로 리팩토링*하였습니다.",
        detail: [
          "Next 13의 get~ 방식에서, async/fetch로 쉽게 SSR을 구현할 수 있기에 리팩토링을 진행하였습니다.",
          "next의 cache, prefetch를 사용하고 react-query를 제거하였습니다.",
          "별도의 세팅이 필요한 MUI를 제거하고 tailwind로 마이그레이션하였습니다.",
          "라이브러리 최소화, 재사용 컴포넌트, 시멘틱 요소 정리 등을 통해 웹사이트 성능을 80에서 98점으로 개선하였습니다.",
        ],
      },
      {
        title: "*next-auth를 사용하여 소셜 로그인*을 구현하였습니다.",
        detail: [
          "naver/kakao/google/github를 통한 로그인이 가능하며 next-auth의 token에 대해 학습하였습니다.",
        ],
      },
      {
        title:
          "*사용자의 데이터 저장을 위해 redux, redux-persist*를 사용하였습니다.",
        detail: [
          "next-redux-wrapper를 사용하여 SSR 환경에 맞게 세팅하였습니다.",
          "redux-persist의 localstorage를 이용하여 페이지 전환 시에도 사용자의 로그인 정보 및 영화 저장 목록을 유지하였습니다.",
        ],
      },
      {
        title: "*axios 인터셉터를 이용하여 중복코드를 개선하였습니다.*",
        detail: [],
      },
      {
        title:
          "*react-query의 infiniteQuery를 이용하여 무한 스크롤을 적용하였습니다.*",
        detail: [
          "리팩토링 후 더 보기 버튼을 클릭하여 이전 데이터에 추가적으로 불러온 데이터를 삽입하는 방식으로 대체하였습니다.",
        ],
      },
      {
        title:
          "*css in js 제거, 비슷한 기능을 하는 컴포넌트에 대한 리팩토링을 통해 최적화를 진행하여 웹 성능 평가를 개선하였습니다.*",
        detail: [
          "기존 성능 87점, 접근성 88점에서 각각 98,95점으로 개선하였습니다.",
        ],
      },
    ],
  },
  {
    period: "2024.01 ~ 2024.02",
    title: "Portfolio - v1",
    name: "portfolio",
    displayName: "포트폴리오 v1",
    summary: "리액트로 작성한 포트폴리오입니다.",
    role: "개인 프로젝트",
    refactor: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "react", displayName: "React", color: "#1CCEFF" },
      { name: "reactquery", displayName: "React-query", color: "#FF475A" },
      { name: "axios", displayName: "Axios", color: "#884798" },
      { name: "tailwindcss", displayName: "Tailwind", color: "#05B6D3" },
      { name: "amazonec2", displayName: "EC2", color: "#F0921E" },
    ],
    front: [
      { name: "typescript", displayName: "Type-script", color: "#387BC8" },
      { name: "react", displayName: "React", color: "#1CCEFF" },
      { name: "reactquery", displayName: "React-query", color: "#FF475A" },
      { name: "axios", displayName: "Axios", color: "#884798" },
      { name: "mui", displayName: "MaterialUi", color: "#027FFE" },
      { name: "framer", displayName: "Framer-motion", color: "#027FFE" },
    ],
    back: [],
    github: "https://github.com/choigirang/portfolio",
    link: "https://v1.choigirang-portfolio.site/",
    description: [
      {
        title:
          "*타입 에러를 통한 프로젝트 안정성을 높이기 위해 typescript를 사용하였습니다.*",
        detail: [
          "프로젝트 및 기술 스택에 대한 데이터를 유니온 타입과 유틸리티 타입을 사용하여 작성하였습니다.",
          "재사용 컴포넌트의 props에 대한 타입 가드를 사용하여 작성하였습니다.",
        ],
      },
      {
        title: "*React의 성능 개선을 위해 최적화를 진행하였습니다.*",
        detail: [
          "Suspense, lazyloading을 사용하여 컴포넌트가 필요한 시점에 불러옵니다.",
          "이미지 포맷을 Webp로 변경, useMemo, useCallback을 사용하여 불필요한 렌더링을 개선하였습니다.",
        ],
      },
      {
        title:
          "*react-query hooks을 만들어 중복 코드를 줄이고 캐시값을 사용하여 API요청을 최소화하였습니다.*",
        detail: [],
      },
      {
        title:
          "스타일에 대한 성능 개선을 위해 *tailwind로 마이그레이션을 진행하였습니다.*",
        detail: [
          "라이브러리의 크기가 큰 MUI를 제거하고, tailwind를 사용하여 초기 로딩 속도를 개선하였습니다.",
          "FramerMotion를 제거하고, 라이브러리에서 사용한 Tooltip, Accordian 컴포넌트를 직접 작성하였습니다.",
        ],
      },
      {
        title:
          "웹과 모바일 등 다양한 기기의 접근성을 높이기 위해 *반응형 웹으로 제작하였습니다.*",
        detail: [
          "사용자 경험을 높이기 위해 화면 크기별 레이아웃 구성이 변경됩니다.",
          "접근성을 높이기 위해 button, input 등 상호 작용이 일어나는 요소에 대해 사용자가 쉽게 인지할 수 있습니다.",
        ],
      },
      {
        title: "웹 표준, meta 작성 등 웹 성능 평가를 개선하였습니다.",
        detail: [
          "기존 성능 점수 42점, 접근성 89점, 권장사항 78점에서 각각 100, 95, 96점으로 개선하였습니다.",
        ],
      },
      {
        title: "*Amazone 서비스를 사용하였습니다.*",
        detail: [
          "ACM(AWS Certificate Manager)를 통해 프로젝트에 대한 인증서를 발급받고 로드밸런서를 사용하여 https를 적용하였습니다.",
          "EC2를 사용하여 배포하였습니다.",
          "S3를 통해 이미지를 저장하고 사용하였습니다.",
        ],
      },
    ],
  },
  {
    period: "2023.11 ~ 2023.11",
    title: "다양한 이벤트를 활용한 토이 프로젝트",
    name: "windows95",
    displayName: "Windows 95",
    summary: "브라우저에서 구현해본 윈도우 95입니다.",
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
      {
        title:
          "*pages 방식으로 작성된 Next13에서, Next 14로 리팩토링*하였습니다.",
        detail: [
          "빠른 화면 로드와 SSR 방식 학습을 위해 Next로 제작하였습니다.",
          "별도의 세팅이 필요한 MUI를 제거하고 tailwind로 마이그레이션하였습니다.",
          "dynamic meta data를 적용하였습니다.",
        ],
      },
      {
        title:
          "*타입에러를 통한 프로젝트의 안정성을 높이기 위해 typescript로 제작*하였습니다.",
        detail: [
          "키보드, 마우스 이벤트에 대한 타입을 작성하여 사용할 수 있습니다.",
          "데이터 타입을 정의하고 특정 데이터에 대해 유틸리티 타입을 사용하였습니다.",
        ],
      },
      {
        title: "*recoil을 사용하여 전역 상태를 관리하였습니다.*",
        detail: [
          "윈도우의 특성을 모방하기 위해, 메뉴가 열려있을 시 바탕화면을 클릭했을 때 메뉴가 닫히거나 윈도우 프로그램이 열려있을 시 바탕화면을 클릭하여 focus를 변경하는 등 발생하는 이벤트에 따른 상태값을 전역적으로 변경하는 데 사용하였습니다.",
          "사용자가 선택한 아이콘 및 데이터에 대한 상태값을 정의하여 변경 및 사용하였습니다.",
        ],
      },
      {
        title:
          "*렌더링을 최소화 하기 위해 useMemo와 useCallback을 사용하였습니다.*",
        detail: [
          "캐릭터 이동 시 변경되는 image, window frame 창에 대한 초기값 등 불필요하게 발생하는 렌더링을 최소화하기 위해 최적화를 진행하였습니다.",
        ],
      },
    ],
  },
  {
    period: "2023.07 ~ 2023.08",
    title: "CRUD를 위한 커뮤니티",
    name: "whyCommunity",
    displayName: "why-chat",
    summary:
      "Backend와 Frontend의 통신에 대해 학습하기 위해 제작한 커뮤니티입니다.",
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
      {
        title: "SSR 및 SEO 적용을 위해 *Next 14*로 제작하였습니다.",
        detail: [
          "아래와 같은 이유로 SSR 방식에 이점이 있다고 생각하여 Next.js를 선택하였습니다.",
          "커뮤니티이기에 다양한 정보가 존재하며 사용자가 검색 시 SEO 최적화와 각 페이지에 대한 정보를 동적으로 가져와야합니다.",
          "커뮤니티의 특성상 다양한 페이지가 존재하며 빠른 페이지 전환이 필요합니다.",
        ],
      },
      {
        title:
          "*pages 방식으로 작성된 Next13에서, Next 14로 리팩토링*하였습니다.",
        detail: [
          "Next 13의 get~ 방식에서, async/fetch로 쉽게 SSR을 구현할 수 있기에 리팩토링을 진행하였습니다.",
          "next의 cache, prefetch를 사용하고 react-query를 제거하였습니다.",
          "재사용 컴포넌트, 시멘틱 요소 정리 등을 통해 웹사이트 성능을 73점, 접근성 86점에서 각각 100점으로 개선하였습니다.",
        ],
      },
      {
        title:
          "*Next.js에 최적화된 스타일 적용을 위해 tailwind*로 마이그레이션을 진행하였습니다.",
        detail: [
          "런타임에서 적용되는 styled-component를 제거하고 빌드 타임에 적용되는 tailwind를 선택하여 SSR 시 별도의 설정 없이 스타일이 적용될 수 있도록 하였습니다.",
          "가독성을 높이기 위해 반복되는 스타일을 선언하여 적용하거나 함수에 전달되는 변수에 의해 스타일을 적용하였습니다.",
          "커스텀 테마를 사용하여 스타일을 적용할 수 있습니다.",
        ],
      },
      {
        title:
          "*타입 에러를 통한 프로젝트 안정성을 높이기 위해 typescript를 사용하였습니다.*",
        detail: [
          "사용자가 작성한 데이터의 유니온 타입과 유틸리티 타입을 사용하여 작성하였습니다.",
          "비동기 데이터에 대한 타입을 작성하여 적용하였습니다.",
        ],
      },
      {
        title:
          "필요에 따라 *클라이언트 / 서버 컴포넌트를 분리*하여 작성하였습니다.",
        detail: [
          "data를 props로 활용하고, children을 사용하여 클라이언트 컴포넌트 안에서 서버 컴포넌트를 사용하였습니다.",
        ],
      },
      {
        title:
          "*express, mongoDB를 이용하여 서버를 구현하고 데이터 통신에 대해 학습하였습니다.*",
        detail: [
          "CRUD 구현과 RESTful에 대해 학습하였습니다.",
          "JWT를 이용하여 access/refresh token을 암호화하며 사용자 인증에 대해 학습하였습니다.",
          "토큰을 사용한 자동로그인 및 아이디 저장 기능을 작성하였습니다.",
        ],
      },
      {
        title: "*Amazone 서비스를 사용하였습니다.*",
        detail: [
          "ACM(AWS Certificate Manager)를 통해 프로젝트에 대한 인증서를 발급받고 로드밸런서를 사용하여 https를 적용하였습니다.",
          "EC2를 사용하여 배포하였습니다.",
          "S3를 통해 이미지를 저장하고 사용하였습니다.",
        ],
      },
    ],
  },
  {
    period: "2023.04 ~ 2023.05",
    title: "BE & FE 팀 프로젝트",
    name: "sideQuest",
    displayName: "Side Quest",
    summary: "부트캠프에서 진행한 커뮤니티 팀 프로젝트입니다.",
    role: "팀 프로젝트 (FE 게시글 CRUD)",
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
    link: "",
    description: [
      {
        title:
          "*Backend와의 협업을 통해 프로젝트 진행 과정에 대해 학습*하였습니다.",
        detail: [
          "화면 정의서를 구현하고 API문서를 작성하였습니다.",
          "CORS에러 발생으로 에러에 대한 개념을 학습하며 HTTP 요청 헤더 Origin 및 서버 Access-Control-Allow-Origin 허용으로 문제를 해결하였습니다.",
          "request payload, response body에 대해 학습하였습니다.",
        ],
      },
      {
        title: "*typescript를 적용하며 학습하였습니다.*",
        detail: [
          "처음으로 학습하며 적용해본 타입스크립트를 통해 타입 불일치로 인한 에러 발생으로 프로젝트의 안정성을 높일 수 있음을 학습하였습니다.",
          "데이터의 유니온 타입과 유틸리티 타입에 대해 학습하였습니다.",
        ],
      },
      {
        title: "*게시글 페이지의 CRUD, 검색 기능을 담당하였습니다.*",
        detail: [
          "react-query를 통해 데이터의 캐시값을 이용하여 API요청 최소화에 대해 학습하였습니다.",
          "custom hook을 사용하여 유저가 입력한 정보와 서버로부터 전달된 데이터의 갯수를 파악하여 pagination을 구현하였습니다.",
        ],
      },
      {
        title: "*styled-components를 사용하여 스타일을 적용하였습니다.*",
        detail: [
          "글로벌 컴포넌트와 재사용 컴포넌트를 작성하여 사용하였습니다.",
          "props를 통한 스타일을 변경과 props에 대한 타입 작성에 대해 학습하였습니다.",
        ],
      },
      {
        title:
          "피그마를 이용하여 화면 정의서를 구현하는 과정을 학습하였습니다.",
        detail: [],
      },
      // "사이드 프로젝트를 진행할 수 있는 커뮤니티입니다.",
      // "피그마를 이용한 화면 정의서 구현, 피드백을 받고 코드를 수정하는 과정을 겪으면서 *FE끼리 혹은 FE와 BE간의 대한 협업에 대한 전반적인 과정에 대해 경험*할 수 있었습니다.",
      // "*API/인증 등에 대해 백엔드 개발자들과 협업*하는 과정을 통해 많은 얘기를 나누고 각자의 입장을 이해하는데 도움이 되었습니다.",
      // "팀원으로 *게시글에 대한 CRUD, 검색, 전반적인 스타일 및 애니메이션 구현을 담당*하였습니다.",
      // "*styled-components의 사용법*, *전역 세팅 방법*, *TypeScript 적용 방법을 이해*하고 코드에 적용했습니다",
    ],
  },
];
