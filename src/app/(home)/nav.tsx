import Link from "next/link";
import Category from "./category";

/** 2024/04/04 - 레이아웃 header 컴포넌트 */
export default function Header() {
  /** 스크롤 시 bg */

  return (
    <nav className="nav">
      <div className="container h-full flex justify-between items-center pt-0">
        <h1 className="text-3xl text-yellow-400 font-bold">
          <Link href="/" title="최기랑 포트폴리오" className="font-black">
            My Portfolio.
          </Link>
        </h1>
        <Category />
      </div>
    </nav>
  );
}
