import { MyProject } from "@/assets/projects";
import Image from "next/image";

/** 2024/04/10 - project card */
export default function Card(data: MyProject) {
  return (
    <li className="relative flex justify-center items-center">
      <Image
        src={data.thumbnail}
        width={300}
        height={200}
        alt="card img"
        placeholder="blur"
        blurDataURL="/gif/spinner.gif"
      ></Image>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 bg-yellow-400 text-white text-nowrap font-bold rounded-lg shadow-lg">
        {data.title}
      </span>
    </li>
  );
}
