import { MyProject } from "@/assets/projects";
import Summary from "./summary";

/** 2024/04/11 - 프로젝트 상세 설명 팝업 */
export default function Detail(data: MyProject) {
  const checkTitleDetails = (text: string) => {
    const title = text.startsWith("!");

    return title;
  };

  const parseDescription = (text: string) => {
    const parts = text.split("*");

    return parts
      .map((part, index) => {
        if (part === "") return null;
        return index % 2 === 0 ? (
          <span key={index}>{part}</span>
        ) : (
          <strong key={index}>{part}</strong>
        );
      })
      .filter(Boolean);
  };

  return (
    <div className="flex flex-col w-full h-full gap-4 sm:flex sm:flex-col md:flex md:flex-col">
      <Summary {...data} />
      <ul className="h-full flex flex-col items-start gap-2 bg-gray-200 mr-4 sm:mr-0 p-4 rounded-lg overflow-y-scroll">
        {data.description.map((des) => (
          <li
            key={des}
            className="flex text-start gap-4 text-lg sm:text-sm md:text-base"
          >
            {!checkTitleDetails(des) && <span>✅</span>}
            <span
              className={`${checkTitleDetails(des) && "font-bold bg-yellow-400 p-1 rounded"}`}
            >
              {checkTitleDetails(des) ? des.slice(1) : parseDescription(des)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
