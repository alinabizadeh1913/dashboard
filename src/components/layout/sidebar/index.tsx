"use client";

import { useEffect, useRef } from "react";
import Typography from "../components/typography";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const sidebarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  });

  return (
    <>
      <aside
        className={`hidden md:block h-screen duration-300 bg-color-2 ${
          isSidebarOpen ? "w-[300px]" : "w-[70px]"
        }`}
        ref={sidebarRef}
      >
        <div className="pt-[70px]">
          <div className="flex flex-col">
            <div className="flex">
              <div className="ms-6 flex items-center text-[18px]">
                <Typography>Receh</Typography>
                <Typography color="#87869D">tok</Typography>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
