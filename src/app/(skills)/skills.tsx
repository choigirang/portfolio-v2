import { tools } from "@/assets/skills";
import Lists from "./lists";

export default function Skills() {
  return (
    <article id="skills" className="w-full h-[600px] flex justify-center">
      <section className="container h-[600px]">
        <Lists data={tools} title={"사용 가능한 언어 & 도구"} />
      </section>
    </article>
  );
}
