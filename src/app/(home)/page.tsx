import Main from "./main";
import About from "../(about)/about";
import Skills from "../(skills)/skills";
import Projects from "../(projects)/projects";

/** 2024/04/04 - default page*/
export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
