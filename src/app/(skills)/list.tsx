"use client";

import { useState } from "react";
import Description from "./description";
import Image from "next/image";
import { MySkills } from "@/assets/skills";
import useSize from "@/hooks/useSize";

/** 2024/04/10 - 개별 Skill List */
export default function List(list: MySkills) {
  const [desOpen, setDesOpen] = useState(false);
  const { isMobile } = useSize();

  return (
    <li
      className="max-w-[80px] flex flex-col justify-center items-center gap-2 cursor-pointer"
      onMouseEnter={() => setDesOpen(true)}
      onMouseLeave={() => setDesOpen(false)}
      onTouchStart={() => setDesOpen((prev) => !prev)}
      style={{ position: isMobile ? undefined : "relative" }}
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
          width={`${isMobile ? 40 : 60}`}
          height={`${isMobile ? 40 : 60}`}
          className="p-2 rounded-md border-2"
          style={{ borderColor: list.color }}
        />
      </div>
      <span
        className="block w-[80px] px-2 py-1 truncate break-all rounded-lg text-white drop-shadow-lg font-black sm:text-sm md:text-base"
        style={{ backgroundColor: list.color }}
      >
        {list.displayName}
      </span>
    </li>
  );
}
