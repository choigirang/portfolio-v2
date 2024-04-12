import { MyProject } from "@/assets/projects";

/** 2024/04/11 - 프로젝트 상세 설명 팝업 */
export default function Detail(data: MyProject) {
  return (
    <div className="flex flex-col gap-4">
      <div id="summary" className="flex flex-col bg-gray-200"></div>
    </div>
  );
}
