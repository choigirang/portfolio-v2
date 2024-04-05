"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import useScroll from "../hooks/useScroll";

export default function Category() {
  const onScroll = (id: string) => {
    useScroll().scrollToPage(id);
  };

  return (
    <ul className="flex gap-10">
      <li onClick={() => onScroll("about")} className={twMerge("button-hover")}>
        <Link href="/#about">About</Link>
      </li>
      <li
        onClick={() => onScroll("skills")}
        className={twMerge("button-hover")}
      >
        <Link href="/#skills">Skills</Link>
      </li>
      <li
        onClick={() => onScroll("projects")}
        className={twMerge("button-hover")}
      >
        <Link href="/#projects">Projects</Link>
      </li>
    </ul>
  );
}
