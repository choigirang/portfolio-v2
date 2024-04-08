import Link from "next/link";
import { meData } from "@/assets/aboutMe";

export default function About() {
  return (
    <article className="flex justify-center w-[80%] h-[400px] ">
      <section className="container h-[400px]">
        <ul className="grid place-items-start gap-y-16 grid-cols-fluidity grid-rows-fluidity">
          {meData.map(({ displayName, displayTxt, Icon, link }) => (
            <li
              key={displayName}
              className="flex justify-between space-x-4 px-4"
            >
              {<Icon className="w-16 h-16" />}
              <div className="relative top-3 flex flex-col whitespace-nowrap space-y-1.5 text-left">
                <span className="font-bold">{displayName}</span>
                {link ? (
                  <Link
                    href={link}
                    target="_blank"
                    className="
                    font-black text-sm transition-colors hover:underline underline-offset-4
                    text-yellow-500 focus:text-yellow-600 active:text-yellow-600"
                  >
                    {displayTxt}
                  </Link>
                ) : (
                  <span className="">{displayTxt}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
