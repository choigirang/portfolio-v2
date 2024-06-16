import { projectsData } from "@/assets/projects";
import Card from "./card";

/** 2024/04/10 - project section */
export default function Projects() {
  return (
    <article id="projects" className="w-full flex justify-center pb-10">
      <section className="container h-full">
        <ul className="w-full flex flex-col gap-8">
          {projectsData.map((project) => (
            <Card key={`project name ${project.name}`} {...project} />
          ))}
        </ul>
      </section>
    </article>
  );
}
