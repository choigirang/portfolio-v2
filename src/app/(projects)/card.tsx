import Detail from "./detail";
import { MyProject } from "@/app/assets/projects";
import ImgSlide from "./imgSlide";

/** 2024/04/10 - project card */
export default function Card(data: MyProject) {
  return (
    <>
      <li className="grid grid-cols-projectDetail items-center w-full gap-4 shadow-ml bg-gray-100 rounded-2xl p-4 sm:flex sm:flex-col md:flex md:flex-col">
        <div className="h-full flex flex-col justify-between items-center gap-2">
          <span className="w-full max-w-[500px] px-4 py-2 rounded-lg bg-yellow-400">
            {data.title}
          </span>
          <ImgSlide {...data} />
        </div>
        <Detail {...data} />
      </li>
    </>
  );
}
