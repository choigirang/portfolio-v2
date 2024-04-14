import { MyProject } from "@/assets/projects";
import Link from "next/link";

/** 2024/04/14 - 화면에 따른 project description */
export default function Summary(data: MyProject) {
  return (
    <ul
      id="summary"
      className="flex flex-col items-start gap-2 bg-gray-200 mr-4 sm:mr-0 p-4 rounded-lg"
    >
      <li className="flex gap-2">
        <span className="font-extrabold">프로젝트명</span>
        <span>: {data.displayName}</span>
      </li>
      <li className="flex gap-2">
        <span className="font-extrabold">기간</span>
        <time>: {data.period}</time>
      </li>
      <li className="flex gap-2">
        <span className="font-extrabold">역할</span>
        <span>: {data.role}</span>
      </li>
      <li className="flex gap-2">
        <span className="flex gap-2 font-extrabold">링크</span> :
        <Link
          href={data.link}
          target="_blank"
          className="hover:text-yellow-500 hover:underline"
        >
          Deploy
        </Link>
        <Link
          href={data.github}
          target="_blank"
          className="hover:text-yellow-500 hover:underline"
        >
          Github
        </Link>
      </li>
    </ul>
  );
}
