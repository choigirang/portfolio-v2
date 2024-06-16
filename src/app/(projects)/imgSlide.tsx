"use client";

import Image from "next/image";
import { useState, useEffect, useMemo, useCallback } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
import { MyProject } from "@/assets/projects";
import useGetimg from "../../hooks/useGetimg";
import useSize from "../../hooks/useSize";

/** 2024/04/14 - 화면에 따른 project imgSlide */
export default function ImgSlide(data: MyProject) {
  const [imgUrl, setImgUrl] = useState<string[]>(["/gif/spinner.gif"]);
  const [slideNum, setSlideNum] = useState(0);
  const { isMobile, isTablet } = useSize();
  const getImg = useGetimg(data.name);

  const refactor = useMemo(() => data.refactor, []);
  const skills = useMemo(
    () => (data.back ? [...data.front, ...data.back] : data.front),
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = await getImg;

        if (urls) setImgUrl(urls);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchData();
  }, []);

  const handleSlide = useCallback(
    (dir: "next" | "prev") => {
      if (dir === "next" && imgUrl && imgUrl.length > slideNum + 1)
        setSlideNum((prev) => prev + 1);
      if (dir === "prev" && slideNum > 0) setSlideNum((prev) => prev - 1);
    },
    [imgUrl]
  );

  const handleImgProps = useCallback(() => {
    if (isMobile) {
      return { width: 300, height: 200, layout: undefined };
    } else if (isTablet) {
      return { width: 400, height: 300, layout: undefined };
    }
    return { width: 500, height: 350, layout: undefined };
  }, [isMobile, isTablet]);

  return (
    <div className="h-full flex flex-col items-center gap-2">
      {imgUrl ? (
        <Image
          src={imgUrl[slideNum]}
          alt="card img"
          {...handleImgProps()}
          style={{
            objectFit: "contain",
            maxHeight: 400,
          }}
          placeholder="blur"
          sizes="(min-width: 300px) 50vw, 100vw"
          blurDataURL="/gif/spinner.gif"
          quality={50}
          className="h-auto"
        />
      ) : (
        <Image
          width={300}
          height={200}
          src={"/gif/spinner.gif"}
          alt="projects image"
          className="h-auto"
        />
      )}

      <div className="flex flex-col gap-2">
        {refactor && refactor.length !== 0 && (
          <ul className="flex justify-start gap-2 flex-wrap">
            <li className="flex items-center text-stone-800 bg-yellow-400 px-1 rounded">
              refactor
            </li>
            {refactor.map((skill) => (
              <li key={`project img ${skill.name}`}>
                <Image
                  src={`https://cdn.simpleicons.org/${skill.name}`}
                  alt={`${skill.name} 아이콘`}
                  width="30"
                  height="30"
                  style={{ borderColor: skill.color }}
                />
              </li>
            ))}
          </ul>
        )}
        <ul className="flex justify-start gap-2 flex-wrap">
          {refactor && (
            <li className="flex items-center text-stone-800 bg-yellow-400 px-1 rounded">
              before
            </li>
          )}
          {skills.map((skill) => (
            <li key={`project img ${skill.name}`}>
              <Image
                src={`https://cdn.simpleicons.org/${skill.name}`}
                alt={`${skill.name} 아이콘`}
                width="30"
                height="30"
                style={{ borderColor: skill.color }}
              />
            </li>
          ))}
        </ul>
        {!isMobile && (
          <div
            id="slide-container"
            className="flex justify-center items-center"
          >
            <ArrowLeftCircleIcon
              width={16}
              height={16}
              className="text-gray-300 button-hover"
              onClick={() => handleSlide("prev")}
            />
            <span className="px-4 py-1 bg-yellow-400 rounded-lg">
              {slideNum + 1} / {imgUrl?.length}
            </span>
            <ArrowRightCircleIcon
              width={16}
              height={16}
              className="text-gray-300 button-hover"
              onClick={() => handleSlide("next")}
            />
          </div>
        )}
        {/* 테블릿 모드 */}
        {isTablet && <div></div>}
      </div>
    </div>
  );
}
