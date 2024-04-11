"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/** 2024/04/10 - 스킬 설명란 */
export default function Description({
  desOpen,
  des,
  color,
  displayName,
  link,
}: {
  desOpen: boolean;
  des: string;
  color: string;
  displayName: string;
  link?: string;
}) {
  const [visible, setVisible] = useState(desOpen);

  /** 2024/04/10 - 게시물 링크로 마우스 이동 시 unmount 되지 않기 위한 추가 타이머 */
  useEffect(() => {
    if (desOpen) {
      const timer = setTimeout(() => setVisible(true), 100);
      return () => clearTimeout(timer); //
    } else {
      const timer = setTimeout(() => setVisible(false), 100);
      return () => clearTimeout(timer);
    }
  }, [desOpen]);

  return (
    <>
      {visible && (
        <div
          className="flex flex-col items-start gap-1 absolute bottom-[110%] left-1/2 w-[240px] p-2 -translate-x-1/2 z-10 rounded drop-shadow-md text-white"
          style={{ backgroundColor: color }}
        >
          <span className="font-black">{displayName}</span>
          <p className="text-start drop-shadow-sm">{des}</p>
          {link && (
            <Link href={link} target="_blank" className="hover:underline">
              ** 관련 게시글 **
            </Link>
          )}
        </div>
      )}
    </>
  );
}
