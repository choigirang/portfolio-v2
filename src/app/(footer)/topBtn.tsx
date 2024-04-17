"use client";

import { ArrowUpCircleIcon } from "@heroicons/react/16/solid";
import useScroll from "../hooks/useScroll";

export default function TopBtn() {
  const handleUp = useScroll();

  return (
    <ArrowUpCircleIcon
      width={50}
      height={50}
      className="fixed bottom-[30px] right-[30px] animate-bounce text-yellow-400 hover:cursor-pointer hover:text-yellow-500 transition-custom"
      onClick={handleUp.scrollToTop}
    />
  );
}
