import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Main() {
  return (
    /** 2024/04/05 - main(intro) */
    <main id="about" className="flex justify-center w-full h-[500px]">
      <div className="container h-full flex-col">
        <h2 className="title border-solid border-b-slate-900">최기랑</h2>
        <h2 className="mt-7 font-bold text-3xl text-center drop-shadow-lg whitespace-nowrap">
          - 프론트엔드 개발자 -
        </h2>
        <p className="mt-7 text-xl text-center drop-shadow-lg text-neutral-900 leading-relaxed">
          타입스크립트를 좋아하는 프론트엔드 개발자입니다.
          <br />
          느리더라도 원리를 이해하고 그것을 검증하는 공부를 선호합니다
          <br />
          이해하는 것에 대한 욕심이 있어서 웹 개발의 전반적인 흐름에 대해 배우고
          싶습니다
        </p>
        <ChevronDownIcon className="absoulte bottom-0 m-auto h-12 stroke-[4px] animate-bounce" />
      </div>
    </main>
  );
}
