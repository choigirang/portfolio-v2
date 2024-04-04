import Link from "next/link";

/** 2024/04/04 - 레이아웃 header 컴포넌트 */
export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full h-32 px-[calc((100%-1200px)/2)] py-0 flex justify-center bg-transparent">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl text-yellow-400 font-bold">
          <Link href="/" title="최기랑 포트폴리오">
            My Portfolio.
          </Link>
        </h1>
        <ul className="flex gap-10">
          <li className="mx-2 hover:cursor-pointer">About</li>
          <li className="mx-2 hover:cursor-pointer">Skills</li>
          <li className="mx-2 hover:cursor-pointer">Projects</li>
        </ul>
      </div>
    </nav>
  );
}
