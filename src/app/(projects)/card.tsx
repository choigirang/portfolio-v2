import Detail from "./detail";
import { MyProject } from "@/assets/projects";
import ImgSlide from "./imgSlide";

/** 2024/04/10 - project card */
export default function Card(data: MyProject) {
  return (
    <>
      <li className="grid grid-cols-projectDetail items-center w-full gap-4 shadow-ml bg-gray-100 rounded-2xl p-4 sm:flex sm:flex-col md:flex md:flex-col">
        <ImgSlide {...data} />
        <Detail {...data} />
      </li>
    </>
  );
}
