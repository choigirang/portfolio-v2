"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
import { MyProject } from "@/assets/projects";
import useGetimg from "../hooks/useGetimg";
import useSize from "../hooks/useSize";

/** 2024/04/14 - 화면에 따른 project imgSlide */
export default function ImgSlide(data: MyProject) {
  const [imgUrl, setImgUrl] = useState<string[]>(["/gif/spinner.gif"]);
  const [slideNum, setSlideNum] = useState(0);
  const { isMobile } = useSize();

  const skills = data.back ? [...data.front, ...data.back] : data.front;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = await useGetimg(data.name);

        if (urls) setImgUrl(urls);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchData();
  }, []);

  const handleSlide = (dir: "next" | "prev") => {
    if (dir === "next" && imgUrl && imgUrl.length > slideNum + 1)
      setSlideNum((prev) => prev + 1); // 후위 증가 연산자를 사용합니다.
    if (dir === "prev" && slideNum > 0) setSlideNum((prev) => prev - 1); // 후위 감소 연산자를 사용합니다.
  };

  return (
    <>
      {imgUrl ? (
        <Image
          src={imgUrl[slideNum]}
          alt="card img"
          width={isMobile ? 300 : undefined}
          height={isMobile ? 200 : undefined}
          fill={isMobile ? false : true}
          style={{
            objectFit: "contain",
            maxHeight: 400,
          }}
          placeholder="blur"
          sizes="(min-width: 300px) 50vw, 100vw"
          blurDataURL="/gif/spinner.gif"
        />
      ) : (
        <Image
          width={300}
          height={200}
          src={"/gif/spinner.gif"}
          alt="projects image"
        />
      )}

      <div className="flex flex-col gap-2 absolute sm:relative left-1/2 bottom-0 -translate-x-1/2 z-10">
        <div className="flex justify-center gap-2">
          {skills.map((skill) => (
            <Image
              src={`https://cdn.simpleicons.org/${skill.name}/${skill.color}`}
              alt={`${skill.name} 아이콘`}
              width="30"
              height="30"
              style={{ borderColor: skill.color }}
              key={skill.name}
            />
          ))}
        </div>
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
      </div>
    </>
  );
}