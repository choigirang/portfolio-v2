import Link from "next/link";
import { meData } from "@/assets/aboutMe";

/** 2024/04/08 - info */
export default function About() {
  return (
    <article className="flex justify-center w-[80%] min-h-[400px] ">
      <section className="container h-full mb-16 sm:pt-0 sm:mb-4">
        <ul className="grid grid-rows-fluidity grid-cols-fluidity sm:grid-rows-1 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 place-items-start gap-y-16 sm:gap-y-8">
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
                  <span>{displayTxt}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
