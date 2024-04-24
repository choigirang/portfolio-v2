import { beSkills, feSkills, etcSkills, tools } from "@/app/assets/skills";
import Lists from "./lists";

/** 2024/04/11 - 스킬 구성 */
export default function Skills() {
  return (
    <article id="skills" className="relative w-full flex justify-center">
      <section className="container h-full flex-col justify-center gap-6 pt-0">
        <Lists data={tools} title="사용 가능한 언어 & 도구" />
        <Lists data={feSkills} title="Frontend측 기술" />
        <Lists data={beSkills} title="Backend측 기술" />
        <Lists data={etcSkills} title="사용해본 경험이 있는" />
      </section>
    </article>
  );
}
