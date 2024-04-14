import { useEffect, useState } from "react";

/** 2024/04/14 - 화면에 따른 mobile 훅 */
export default function useSize() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      setMobile(isMobile);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, setMobile };
}
