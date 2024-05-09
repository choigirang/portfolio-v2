"use client";

import { useState } from "react";
import { MySkills } from "@/assets/skills";
import List from "./list";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

/** 2024/04/10 - 스킬 리스트 */
export default function Lists({
  data,
  title,
}: {
  data: MySkills[];
  title: string;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full bg-gray-100 p-2 rounded-2xl">
      <button
        className="w-full h-[50px] bg-white rounded-2xl"
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
      </button>

      <ul
        className="relative w-full flex flex-wrap justify-center gap-6 transition-custom"
        style={{
          height: !open ? 0 : "inherit",
          paddingTop: !open ? 0 : 16,
          overflow: !open ? "hidden" : "visible",
        }}
      >
        {data.map((list) => (
          <List key={list.name} {...list} />
        ))}
      </ul>
    </div>
  );
}
