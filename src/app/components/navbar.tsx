"use client"; // This component is client-side

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import bit24logo from "../../../public/bit24logo.svg";
import bit24logoLight from "../../../public/bit24logoLight.svg";
import { LightIcon, DarkIcon } from "@/app/components/ui/icons";

interface NavbarProps {
  toggleTheme: () => void;
  theme?: any;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  // const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // const storedToken = localStorage.getItem("token");
      // setToken(storedToken);
    }
  }, []);

  const currentIcon = theme === "dark" ? <LightIcon /> : <DarkIcon />;
  const currentLogo = theme === "dark" ? bit24logo : bit24logoLight;

  return (
    <div className="flex w-full sticky z-[9] lg:h-[73px] py-[25px] h-[45px] items-center justify-between px-[20px] border border-b-black dark:border-b-black dark:border-none">
      <ul className="flex text-[14px] items-center font-poppinsSemibold600 text-customGray gap-[40px]">
        <li>
          <Link href="/">
            <Image src={currentLogo} alt="Bit24 Logo" width={115} height={27} />
          </Link>
        </li>
      </ul>

      <button onClick={toggleTheme} className="p-2 rounded">
        {currentIcon}
      </button>
    </div>
  );
};

export default Navbar;
