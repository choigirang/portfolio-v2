"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
import { MyProject, S3_URL } from "@/assets/projects";
import useGetimg from "../hooks/useGetimg";

export default function ImgSlide(data: MyProject) {
  const [imgUrl, setImgUrl] = useState<string[]>(["/gif/spinner.gif"]);
  const [slideNum, setSlideNum] = useState(0);

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
          fill
          style={{ objectFit: "contain" }}
          placeholder="blur"
          sizes="(min-width: 300px) 50vw, 100vw"
          blurDataURL="/gif/spinner.gif"
        />
      ) : (
        <Image src={"/gif/spinner.gif"} alt="projects image" />
      )}
      <div
        id="slide-container"
        className="absolute left-1/2 bottom-0 -translate-x-1/2 flex justify-center items-center z-10"
      >
        <ArrowLeftCircleIcon
          width={16}
          height={16}
          className="text-gray-300 button-hover"
          onClick={() => handleSlide("prev")}
        />
        <span className="px-4 py-1 bg-gray-200 shadow-lg">
          {slideNum + 1} / {imgUrl?.length}
        </span>
        <ArrowRightCircleIcon
          width={16}
          height={16}
          className="text-gray-300 button-hover"
          onClick={() => handleSlide("next")}
        />
      </div>
    </>
  );
}
