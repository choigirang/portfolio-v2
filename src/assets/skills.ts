export interface MySkills {
  title?: string;
  name: string;
  color: string;
  displayName: string;
  description: string;
  link?: string;
}
/** 2024/04/08 - 도구들 */
export const tools: MySkills[] = [
  {
    name: "git",
    color: "#F05032",
    displayName: "Git",
    description: `버전 관리에 대해 이해하고 있고, 명령어들을 커맨드라인 명령어로 사용할 수 있습니다.\n또한 Git Flow에 대해 이해하고 사용해본 경험이 있습니다.`,
    link: `https://choigirang.github.io/posts/01-Git-GitFlow/`,
  },
  {
    name: "github",
    color: "#181717",
    displayName: "GitHub",
    description: `Git을 이용해서 관리하는 코드를 공유 및 저장하기 위해 사용합니다.`,
    link: `https://choigirang.github.io/posts/1-Git-%EA%B8%B0%EC%B4%88/`,
  },
  {
    name: "javascript",
    color: "#F7DF1E",
    displayName: "JavaScript",
    description: `객체나 배열의 메서드들을 제대로 사용할 수 있습니다.\n 실행 컨텍스트, 프로토타입, 스코프 등에 대한 개념을 알고 있습니다.`,
    link: `https://choigirang.github.io/categories/javascript/`,
  },
  {
    name: "typescript",
    color: "#3178C6",
    displayName: "TypeScript",
    description: `필요한 타입을 직접 만들어 적용할 수 있고, 유틸리티 타입들도 활용할 수 있습니다.`,
    link: `https://choigirang.github.io/posts/01-Typescript-Record-type/`,
  },
  {
    name: "figma",
    color: "#F24D1D",
    displayName: "Figma",
    description: `다양한 직군들의 원활한 소통을 위해 사용합니다.`,
  },
];

/** 2024/04/08 - FE */
export const feSkills: MySkills[] = [
  {
    name: "react",
    color: "#61DAFB",
    displayName: "React.js",
    description: `JSX, Hook, State, Component 등의 개념에 대해 이해하고 사용할 수 있습니다.`,
    link: "https://choigirang.github.io/categories/react/",
  },
  {
    name: "nextdotjs",
    color: "#000000",
    displayName: "Next.js",
    description: `CSR, SSR, SSG, ISR 등의 개념을 이해했고, 14버전을 기준으로 각 개념들을 구현해본 경험이 있습니다.`,
    link: "hhttps://choigirang.github.io/posts/Next-%EB%8B%A4%EC%8B%9C-%EB%B0%B0%EC%9A%B0%EA%B8%B0(1)/",
  },
  {
    name: "reactquery",
    color: "#FF4154",
    displayName: "React-Query",
    description: `서버의 요청할 CRUD에 대한 훅을 만들 수 있고, 서버의 데이터를 관리하기 위해 사용할 수 있습니다.`,
    link: "https://choigirang.github.io/posts/React-Query%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4/",
  },
  {
    name: "redux",
    color: "#764ABC",
    displayName: "Redux / RTK",
    description: `Redux의 동작 흐름에 대해 이해하고 있고, Redux-Toolkit과 TypeScript를 활용한 코드를 구현할 수 있습니다.`,
    link: "https://choigirang.github.io/posts/Next-RTK,persist-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0(2)/",
  },

  {
    name: "recoil",
    color: "#3578E5",
    displayName: "Recoil",
    description: `간단한 상태관리를 위해 사용해본 경험이 있습니다.`,
    link: "https://choigirang.github.io/posts/01-React-Reacoil/",
  },

  {
    name: "styledcomponents",
    color: "#DB7093",
    displayName: "Styled-Components",
    description: `전역 스타일 설정을 할 수 있고, TypeScript를 적용해서 코드를 구현할 수 있습니다.`,
    link: "https://choigirang.github.io/posts/Next-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-(5)-styled-component/",
  },
  {
    name: "mui",
    color: "#027FFE",
    displayName: "Material-UI",
    description: `스타일링 및 애니메이션 구현을 위해 사용하였으며, 모드에 따른 테마 설정, 컴포넌트 커스텀을 해본 경험이 있습니다.`,
    link: "https://choigirang.github.io/posts/Mui-%EB%B0%B0%EC%9A%B0%EA%B8%B0-(2)-Tab/",
  },
  {
    name: "tailwindcss",
    color: "#06B6D4",
    displayName: "TailwindCss",
    description: `CSS로 가능한 대부분의 것을 사용할 수 있고, 유틸리티 속성이나 커스터마이징을 할 수 있습니다.`,
    link: "https://choigirang.github.io/posts/Tailwind-(1)/",
  },
];

/** 2024/04/08 - BE */
export const beSkills: MySkills[] = [
  {
    name: "express",
    color: "#000000",
    displayName: "Express",
    description: `Request, Response, Middleware, Router에 대한 이해를 하고 있고, 인증 및 CRUD를 위한 서버를 만들 수 있습니다.`,
    link: "https://choigirang.github.io/posts/1-Node-Express-(1)/",
  },
  {
    name: "mongodb",
    color: "#53B145",
    displayName: "MongDB",
    description: `MongoDB를 활용하여 데이터에 대한 모델링을 구현하고 데이터를 관리해본 경험이 있습니다.`,
    link: "https://choigirang.github.io/posts/MongoDB-%EB%AC%B8%EB%B2%95/",
  },
  {
    name: "amazonec2",
    color: "#F0921E",
    displayName: "EC2",
    description: `https / SSL 인증 및 로드 밸런서를 적용하여 개인 프로젝트 배포를 해본 경험이 있습니다.`,
    link: "https://choigirang.github.io/posts/AWS-EC2-2%EC%9E%A5/",
  },
  {
    name: "amazons3",
    color: "#569A31",
    displayName: "AWS-S3",
    description: `버킷을 생성하고 접근 권한을 열고 이미지를 저장할 수 있습니다.`,
    link: "https://choigirang.github.io/posts/Node-S3-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C/",
  },
];

/** 2024/04/08 - etc */
export const etcSkills: MySkills[] = [
  {
    name: "framer",
    color: "#027FFE",
    displayName: "Framer-motion",
    description: `스타일링 및 애니메이션 구현을 위해 사용해본 경험이 있습니다.`,
  },
  {
    name: "jsonwebtokens",
    color: "#000000",
    displayName: "JWT",
    description: `AccessToken과 RefreshToken을 직접 만들어서 인증을 처리하는 로직을 구현해본 경험이 있습니다.`,
  },
  {
    name: "firebase",
    color: "#DC2C01",
    displayName: "Firebase",
    description: `데이터 저장을 위한 storage를 사용해본 경험이 있습니다.`,
  },
];
