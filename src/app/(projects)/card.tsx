import Image from "next/image";
import Detail from "./detail";
import { MyProject, S3_URL } from "@/assets/projects";

/** 2024/04/10 - project card */
export default function Card(data: MyProject) {
  return (
    <>
      <li className="w-full h-[500px] grid grid-cols-projectDetail shadow-ml bg-yellow-400 rounded-md p-4">
        <div className="relative">
          <Image
            src={S3_URL + data.thumbnail}
            alt="card img"
            fill
            objectFit="contain"
            placeholder="blur"
            blurDataURL="/gif/spinner.gif"
            className="rounded-md transition-custom"
          />
        </div>
        <Detail {...data} />
      </li>
    </>
  );
}
