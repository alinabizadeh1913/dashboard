"use client";

import { useEffect, useRef } from "react";
import Typography from "../components/typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

  return (
    <>
      <aside
        className={`hidden md:block h-screen duration-300 background-element ${
          isSidebarOpen ? "w-[300px]" : "w-[70px]"
        }`}
        ref={sidebarRef}
      >
        <div
          className={`${
            isSidebarOpen ? "pl-[70px]" : "px-[15px]"
          } duration-300`}
        >
          <Link
            href="/"
            className={`mt-[70px] flex items-center ${
              isSidebarOpen ? "justify-start" : "justify-center"
            }`}
          >
            <div className={`${isSidebarOpen ? "me-[15px]" : ""}`}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.16 10.58C21.16 16.4232 16.4232 21.16 10.58 21.16C4.73683 21.16 0 16.4232 0 10.58C0 4.73683 4.73683 0 10.58 0C16.4232 0 21.16 4.73683 21.16 10.58ZM13.1218 6.64916C14.5935 7.15454 15.6701 7.9113 15.4589 9.31963C15.3055 10.3509 14.7317 10.8497 13.9692 11.0243C15.0153 11.5667 15.3717 12.5962 15.0405 13.841C14.4116 15.6323 12.9166 15.7831 10.9282 15.4087L10.4454 17.3343L9.27981 17.0446L9.75599 15.1448C9.45381 15.07 9.14499 14.99 8.82687 14.9047L8.3487 16.8137L7.18447 16.524L7.66663 14.5944L5.31893 14.0044L5.89805 12.6747C5.89805 12.6747 6.75744 12.9016 6.74548 12.8851C7.07556 12.9665 7.22233 12.7521 7.28011 12.6099L8.58845 7.38342C8.60306 7.13668 8.51739 6.82578 8.04519 6.70803C8.06312 6.69546 7.19842 6.49834 7.19842 6.49834L7.50857 5.25803L9.8596 5.83816L10.3378 3.9304L11.5027 4.22014L11.0344 6.09019C11.3479 6.16097 11.6627 6.23308 11.9689 6.30915L12.4338 4.451L13.5993 4.74074L13.1218 6.64916ZM10.3329 9.83154C11.1269 10.042 12.8546 10.5001 13.1557 9.29912C13.4629 8.07039 11.7844 7.69929 10.9626 7.51759C10.8695 7.497 10.7873 7.47884 10.7203 7.46214L10.1399 9.78135C10.1952 9.79502 10.2601 9.81224 10.3329 9.83154ZM9.43335 13.5656C10.3843 13.816 12.4641 14.3639 12.7951 13.0405C13.1338 11.6875 11.1173 11.2368 10.1334 11.0169L10.1333 11.0169L10.1332 11.0168C10.0233 10.9923 9.92635 10.9706 9.84697 10.9509L9.20675 13.5069C9.27164 13.523 9.34763 13.543 9.43267 13.5654L9.43327 13.5655L9.43335 13.5656Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              className={`flex items-center text-[18px] font-[700] ${
                isSidebarOpen ? "block" : "hidden"
              }`}
            >
              <Typography className="text-white">Crypt</Typography>
              <Typography className="text-primary">inum</Typography>
            </div>
          </Link>
          <div className="mt-[150px]">
            <div
              className={`flex flex-col gap-y-[40px] ${
                isSidebarOpen ? "items-start" : ""
              }`}
            >
              <Link href="/" className="flex items-center justify-center">
                <div
                  className={`${isSidebarOpen ? "me-[20px]" : ""} ${
                    pathname == "/" ? "text-primary" : "text-white"
                  }`}
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.25 7.455V3.4825C19.25 2.24875 18.69 1.75 17.2988 1.75H13.7637C12.3725 1.75 11.8125 2.24875 11.8125 3.4825V7.44625C11.8125 8.68875 12.3725 9.17875 13.7637 9.17875H17.2988C18.69 9.1875 19.25 8.68875 19.25 7.455Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.25 17.2988V13.7637C19.25 12.3725 18.69 11.8125 17.2988 11.8125H13.7637C12.3725 11.8125 11.8125 12.3725 11.8125 13.7637V17.2988C11.8125 18.69 12.3725 19.25 13.7637 19.25H17.2988C18.69 19.25 19.25 18.69 19.25 17.2988Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.1875 7.455V3.4825C9.1875 2.24875 8.6275 1.75 7.23625 1.75H3.70125C2.31 1.75 1.75 2.24875 1.75 3.4825V7.44625C1.75 8.68875 2.31 9.17875 3.70125 9.17875H7.23625C8.6275 9.1875 9.1875 8.68875 9.1875 7.455Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.1875 17.2988V13.7637C9.1875 12.3725 8.6275 11.8125 7.23625 11.8125H3.70125C2.31 11.8125 1.75 12.3725 1.75 13.7637V17.2988C1.75 18.69 2.31 19.25 3.70125 19.25H7.23625C8.6275 19.25 9.1875 18.69 9.1875 17.2988Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
                  <Typography
                    className={`font-[500] ${
                      pathname == "/" ? "text-primary" : "text-white"
                    }`}
                  >
                    Dashboard
                  </Typography>
                </div>
              </Link>
              <Link href="/wallet" className="flex items-center justify-center">
                <div
                  className={`${isSidebarOpen ? "me-[20px]" : ""} ${
                    pathname == "/wallet" ? "text-primary" : "text-white"
                  }`}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9938 3.45626V6.78126H11.6813V3.45626C11.6813 3.22001 11.4712 3.10626 11.3312 3.10626C11.2875 3.10626 11.2438 3.11501 11.2 3.13251L4.26125 5.74876C3.7975 5.92376 3.5 6.36126 3.5 6.86001V7.44626C2.70375 8.04126 2.1875 8.99501 2.1875 10.0713V6.86001C2.1875 5.81876 2.82625 4.89126 3.7975 4.52376L10.745 1.89876C10.9375 1.82876 11.1387 1.79376 11.3312 1.79376C12.2062 1.79376 12.9938 2.50251 12.9938 3.45626Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.8126 12.6875V13.5625C18.8126 13.7988 18.6288 13.9913 18.3838 14H17.1063C16.6426 14 16.2226 13.6588 16.1876 13.2038C16.1613 12.9325 16.2663 12.6787 16.4413 12.5037C16.5988 12.3375 16.8176 12.25 17.0538 12.25H18.3751C18.6288 12.2587 18.8126 12.4512 18.8126 12.6875Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.045 11.3312H17.9375C18.4188 11.3312 18.8125 10.9375 18.8125 10.4562V10.0713C18.8125 8.26 17.3337 6.78125 15.5225 6.78125H5.4775C4.73375 6.78125 4.05125 7.02625 3.5 7.44625C2.70375 8.04125 2.1875 8.995 2.1875 10.0713V15.96C2.1875 17.7712 3.66625 19.25 5.4775 19.25H15.5225C17.3337 19.25 18.8125 17.7712 18.8125 15.96V15.7937C18.8125 15.3125 18.4188 14.9187 17.9375 14.9187H17.1762C16.3362 14.9187 15.5312 14.4025 15.3125 13.5887C15.1288 12.9237 15.3475 12.285 15.785 11.8563C16.1088 11.5238 16.555 11.3312 17.045 11.3312ZM12.25 11.1562H6.125C5.76625 11.1562 5.46875 10.8587 5.46875 10.5C5.46875 10.1413 5.76625 9.84375 6.125 9.84375H12.25C12.6087 9.84375 12.9062 10.1413 12.9062 10.5C12.9062 10.8587 12.6087 11.1562 12.25 11.1562Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
                  <Typography
                    className={`font-[500] ${
                      pathname == "/wallet" ? "text-primary" : "text-white"
                    }`}
                  >
                    Wallet
                  </Typography>
                </div>
              </Link>
              <Link
                href="/messages"
                className="flex items-center justify-center"
              >
                <div
                  className={`${isSidebarOpen ? "me-[20px]" : ""} ${
                    pathname == "/messages" ? "text-primary" : "text-white"
                  }`}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.875 3.0625H6.125C3.5 3.0625 1.75 4.375 1.75 7.4375V13.5625C1.75 16.625 3.5 17.9375 6.125 17.9375H14.875C17.5 17.9375 19.25 16.625 19.25 13.5625V7.4375C19.25 4.375 17.5 3.0625 14.875 3.0625ZM15.2862 8.39125L12.5475 10.5788C11.97 11.0425 11.235 11.27 10.5 11.27C9.765 11.27 9.02125 11.0425 8.4525 10.5788L5.71375 8.39125C5.43375 8.16375 5.39 7.74375 5.60875 7.46375C5.83625 7.18375 6.2475 7.13125 6.5275 7.35875L9.26625 9.54625C9.93125 10.08 11.06 10.08 11.725 9.54625L14.4638 7.35875C14.7438 7.13125 15.1637 7.175 15.3825 7.46375C15.61 7.74375 15.5662 8.16375 15.2862 8.39125Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
                  <Typography
                    className={`font-[500] ${
                      pathname == "/messages" ? "text-primary" : "text-white"
                    }`}
                  >
                    Messages
                  </Typography>
                </div>
              </Link>
              <Link href="/trade" className="flex items-center justify-center">
                <div
                  className={`${isSidebarOpen ? "me-[20px]" : ""} ${
                    pathname == "/trade" ? "text-primary" : "text-white"
                  }`}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.125 13.5625C13.125 16.7037 10.5787 19.25 7.4375 19.25C4.29625 19.25 1.75 16.7037 1.75 13.5625C1.75 10.4213 4.29625 7.875 7.4375 7.875C7.58625 7.875 7.74375 7.88375 7.8925 7.8925C10.6663 8.11125 12.8888 10.3337 13.1075 13.1075C13.1163 13.2562 13.125 13.4138 13.125 13.5625Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.2501 7.4375C19.2501 10.29 17.1501 12.6438 14.4201 13.055V13.0025C14.1488 9.6075 11.3926 6.85125 7.97132 6.58H7.94507C8.35632 3.85 10.7101 1.75 13.5626 1.75C16.7038 1.75 19.2501 4.29625 19.2501 7.4375Z"
                      fill="currentColor"
                    />
                    <path
                      d="M4.89125 1.75H2.625C2.14375 1.75 1.75 2.14375 1.75 2.625V4.89125C1.75 5.67 2.695 6.06375 3.24625 5.5125L5.5125 3.24625C6.055 2.695 5.67 1.75 4.89125 1.75Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16.1088 19.25H18.375C18.8563 19.25 19.25 18.8562 19.25 18.375V16.1087C19.25 15.33 18.305 14.9362 17.7538 15.4875L15.4875 17.7537C14.945 18.305 15.33 19.25 16.1088 19.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
                  <Typography
                    className={`font-[500] ${
                      pathname == "/trade" ? "text-primary" : "text-white"
                    }`}
                  >
                    Trade
                  </Typography>
                </div>
              </Link>
              <Link
                href="/settings"
                className="flex items-center justify-center"
              >
                <div
                  className={`${isSidebarOpen ? "me-[20px]" : ""} ${
                    pathname == "/settings" ? "text-primary" : "text-white"
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.1 9.22C18.29 9.22 17.55 7.94 18.45 6.37C18.97 5.46 18.66 4.3 17.75 3.78L16.02 2.79C15.23 2.32 14.21 2.6 13.74 3.39L13.63 3.58C12.73 5.15 11.25 5.15 10.34 3.58L10.23 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63C5.02 18.54 5.33 19.7 6.24 20.22L7.97 21.21C8.76 21.68 9.78 21.4 10.25 20.61L10.36 20.42C11.26 18.85 12.74 18.85 13.65 20.42L13.76 20.61C14.23 21.4 15.25 21.68 16.04 21.21L17.77 20.22C18.68 19.7 18.99 18.53 18.47 17.63C17.56 16.06 18.3 14.78 20.11 14.78C21.15 14.78 22.01 13.93 22.01 12.88V11.12C22 10.08 21.15 9.22 20.1 9.22ZM12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
                  <Typography
                    className={`font-[500] ${
                      pathname == "/settings" ? "text-primary" : "text-white"
                    } text-nowrap`}
                  >
                    Account Settings
                  </Typography>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
