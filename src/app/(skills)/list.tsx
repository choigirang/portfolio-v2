"use client";

import { useState } from "react";
import Description from "./description";
import Image from "next/image";
import { MySkills } from "@/assets/skills";

/** 2024/04/10 - 개별 Skill List */
export default function List(list: MySkills) {
  const [desOpen, setDesOpen] = useState(false);

  return (
    <li
      className="relative max-w-[80px] flex flex-col justify-center items-center gap-2 cursor-pointer"
      onMouseEnter={() => setDesOpen(true)}
      onMouseLeave={() => setDesOpen(false)}
      onTouchStart={() => setDesOpen((prev) => !prev)}
    >
      <Description
        desOpen={desOpen}
        des={list.description}
        color={list.color}
        displayName={list.displayName}
        link={list.link}
      />
      <div className="flex justify-center">
        <Image
          src={`https://cdn.simpleicons.org/${list.name}/${list.color}`}
          alt={`${list.name} 아이콘`}
          width="60"
          height="60"
          className="p-2 rounded-md border-2"
          style={{ borderColor: list.color }}
        />
      </div>
      <span
        className="block w-[80px] px-2 py-1 truncate break-all rounded-lg text-white drop-shadow-lg font-black"
        style={{ backgroundColor: list.color }}
      >
        {list.displayName}
      </span>
    </li>
  );
}
