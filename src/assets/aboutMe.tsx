import {
  CalendarDaysIcon,
  CodeBracketIcon,
  FlagIcon,
  IdentificationIcon,
  MapPinIcon,
  PencilIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";

interface AboutMe {
  displayName: string;
  displayTxt: string;
  Icon: typeof IdentificationIcon;
  link?: string;
}

export const meData: AboutMe[] = [
  {
    displayName: "이름",
    displayTxt: "최기랑",
    Icon: IdentificationIcon,
  },
  {
    displayName: "생년월일",
    displayTxt: "1996.07.27",
    Icon: CalendarDaysIcon,
  },
  {
    displayName: "연락처",
    displayTxt: "010-7255-7942",
    Icon: PhoneIcon,
    link: "tel:010-7255-7942",
  },
  {
    displayName: "학력",
    displayTxt: "한양사이버대학교 - 미디어디자인",
    Icon: FlagIcon,
  },
  {
    displayName: "깃허브",
    displayTxt: "https://github.com/choigirang",
    Icon: CodeBracketIcon,
    link: "https://github.com/choigirang",
  },
  {
    displayName: "블로그",
    displayTxt: "https://choigirang.github.io/",
    Icon: PencilIcon,
    link: "https://choigirang.github.io/",
  },
];
