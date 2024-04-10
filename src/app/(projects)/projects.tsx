import { projectsData } from "@/assets/projects";
import Card from "./card";

/** 2024/04/10 - project section */
export default function Projects() {
  return (
    <article className="w-full flex justify-center pt-32">
      <section className="container h-full">
        <ul className="w-full grid grid-cols-projects grid-rows-projects gap-4">
          {projectsData.map((project) => (
            <Card key={project.name} {...project} />
          ))}
        </ul>
      </section>
    </article>
  );
}
