import Detail from "./detail";
import { MyProject } from "@/assets/projects";
import ImgSlide from "./imgSlide";

/** 2024/04/10 - project card */
export default function Card(data: MyProject) {
  return (
    <>
      <li className="w-full h-[500px] grid grid-cols-projectDetail shadow-ml bg-gray-100 rounded-2xl p-4">
        <div className="relative flex flex-col justify-between gap-2">
          <span className="px-4 py-2 rounded-lg bg-yellow-400">
            {data.title}
          </span>
          <ImgSlide {...data} />
        </div>
        <Detail {...data} />
      </li>
    </>
  );
}
