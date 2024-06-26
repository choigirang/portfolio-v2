import { MyProject } from "@/assets/projects";
import Summary from "./summary";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";

/** 2024/04/11 - 프로젝트 상세 설명 팝업 */
export default function Detail(data: MyProject) {
  const parseDescription = (text: string) => {
    const parts = text.split("*");

    return (
      <span>
        {parts
          .map((part, index) => {
            if (part === "") return null;
            return index % 2 === 0 ? (
              <span key={`detail ${index}`}>{part}</span>
            ) : (
              <strong key={`strong ${index}`}>{part}</strong>
            );
          })
          .filter(Boolean)}
      </span>
    );
  };

  return (
    <div className="flex flex-col w-full h-full gap-4 text-sm sm:flex sm:flex-col md:flex md:flex-col">
      <Summary {...data} />
      <ul className="h-full flex flex-col items-start gap-2 bg-gray-200 mr-4 sm:mr-0 p-4 rounded-lg overflow-y-scroll">
        {data.description.map((des) => (
          <li
            key={des.title}
            className="flex flex-col text-start sm:text-sm md:text-base"
          >
            <span className="flex gap-2 mb-1 text-base">
              <CheckBadgeIcon width={16} height={16} color="green" />
              {parseDescription(des.title)}
            </span>
            <ul className="flex flex-col text-sm gap-1 pl-4">
              {des.detail.length !== 0 &&
                des.detail.map((detail, idx) => (
                  <li className="text-stone-600" key={`${detail + idx}`}>
                    - {detail}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
