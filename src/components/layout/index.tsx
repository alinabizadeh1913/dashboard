"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Menu from "./menu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <>
      <div className="flex">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className={`${isSidebarOpen ? "md:w-[calc(100%-300px)]" : "md:w-[calc(100%-70px)]"} md:pt-[38px] md:pl-[62px] md:pr-[38px]`}>
          <Menu />
          {children}
        </main>
      </div>
    </>
  );
};
export default Layout;
