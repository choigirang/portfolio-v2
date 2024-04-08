"use client";

import { MySkills } from "@/assets/skills";

export default function Lists({
  data,
  title,
}: {
  data: MySkills[];
  title: string;
}) {
  return (
    <>
      <div className="w-full bg-gray-100 p-2 rounded-2xl">
        <button className="w-full h-[50px] bg-white rounded-2xl">
          {title}
        </button>
        <ul className="w-full flex justify-center gap-6">
          {data.map((list) => (
            <li>{list.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
