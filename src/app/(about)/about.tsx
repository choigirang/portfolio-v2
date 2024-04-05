import Link from "next/link";
import { meData } from "@/assets/aboutMe";

export default function About() {
  return (
    <article className="flex justify-center w-full h-[800px]">
      <section className="container">
        <ul className="w-full grid place-items-start gap-y-16 grid-cols-fluidity">
          {meData.map(({ displayName, displayTxt, Icon, link }) => (
            <li key={displayName} className="flex space-x-4 ml-0 sm:ml-16">
              {<Icon className="w-16 h-16" />}
              <div>
                <span>{displayName}</span>
                {link && (
                  <Link href={link} target="_blank">
                    {displayTxt}
                  </Link>
                )}
                {!link && <span>{displayTxt}</span>}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
