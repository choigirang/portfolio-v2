"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import useScroll from "../hooks/useScroll";
import { useState } from "react";
import { ArrowRightCircleIcon, Bars2Icon } from "@heroicons/react/16/solid";
import useSize from "../hooks/useSize";

export default function Category() {
  const [showNav, setShowNav] = useState(false);
  const { isMobile } = useSize();
  const scroll = useScroll();

  const hanldeScroll = (id: string) => {
    scroll.scrollToPage(id);
  };

  /** 모바일 사이즈 */

  const handleNav = () => {
    setShowNav((prev) => !prev);
  };

  const getStyles = () => {
    const styles = {
      ...(isMobile && {
        width: "70vw",
        height: "100vh",
        position: "absolute" as const,
        top: 0,
        flexDirection: "column" as const,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 24,
        color: "#eab308",
        backgroundColor: "#f5f5f5",
      }),
      right: showNav ? "0" : "-100%",
    };

    return styles;
  };

  return (
    <>
      {isMobile && !showNav && (
        <Bars2Icon
          width={32}
          height={32}
          onClick={handleNav}
          className="hover:cursor-pointer hover:text-yellow-400"
        />
      )}
      <ul className="flex gap-10 transition-custom" style={getStyles()}>
        <li
          onClick={() => hanldeScroll("about")}
          className={twMerge("button-hover")}
        >
          <Link href="/#about">About</Link>
        </li>
        <li
          onClick={() => hanldeScroll("skills")}
          className={twMerge("button-hover")}
        >
          <Link href="/#skills">Skills</Link>
        </li>
        <li
          onClick={() => hanldeScroll("projects")}
          className={twMerge("button-hover")}
        >
          <Link href="/#projects">Projects</Link>
        </li>
        {isMobile && (
          <ArrowRightCircleIcon
            className="absolute top-1/2 left-[10%] -translate-x-1/2 hover:text-yellow-600 hover:cursor-pointer"
            width={32}
            height={32}
            onClick={handleNav}
            onTouchStart={handleNav}
          />
        )}
      </ul>
    </>
  );
}
