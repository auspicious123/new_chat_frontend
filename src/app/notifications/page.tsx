"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import Navbar from "../components/navbar";
import { LightIcon, DarkIcon } from "@/app/components/ui/icons";
import Link from "next/link";

const Notifications = () => {
  const router = useRouter();
  let pathname = usePathname();
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(storedTheme || (prefersDark ? "dark" : "light"));

    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);
  return (
    <div className="mx-10 h-screen/90 overflow-hidden">
      <div className="flex justify-start items-start space-x-5 my-4">
        <Link
          href="/chat"
          className={`${
            pathname === "/chat" ? "bg-customYellow text-black dark:text-black" : ""
          } border p-2 px-4 font-semibold rounded hover:scale-105`}
        >
          Messages
        </Link>
        <Link
          href="/notifications"
          className={`${
            pathname === "/notifications" ? "bg-customYellow text-black dark:text-black" : ""
          } border p-2 px-4 font-semibold rounded hover:scale-105 `}
        >
          Notifications{" "}
          <span className="rounded-md border-[.5px] border-stroke border-green-600 bg-gray-2 px-2 py-0.5 text-base font-medium text-green-600 dark:border-strokedark dark:bg-boxdark-2 dark:text-green-600 2xl:ml-4">
            7
          </span>
        </Link>
      </div>
      <div className="flex items-start justify-start min-h-screen shadow-xl">
        <div className="lg:w-1/4 border h-screen/75 overflow-y-auto border-gray-200 dark:border-gray-800 border-r-0 no-scrollbar">
          <div className="p-6 text-xl font-bold border-b border-b-gray-200 dark:border-gray-800">
            Active Conversations{" "}
          </div>
          <div className="">
            <div className="relative m-4">
              <input
                type="search"
                className="block w-full p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50  dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Search..."
                required
              />
              <div className="absolute inset-y-0 end-3 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>{" "}
          <div className="no-scrollbar max-h-full space-y-2.5 overflow-auto">
            <div className="flex cursor-pointer items-center rounded px-4 py-2 hover:bg-gray-2 dark:hover:bg-strokedark">
              <div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full">
                <Image src="/profile.png" width={44} height={44} alt="profile" />
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border border-gray-200 bg-green-600"></span>
              </div>
              <div className="w-full">
                <h5 className="text-base font-medium text-black dark:text-white">Name</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-3/4 border h-screen/75 border-gray-200 dark:border-gray-800 overflow-y-auto "></div>
      </div>
    </div>
  );
};

export default Notifications;
