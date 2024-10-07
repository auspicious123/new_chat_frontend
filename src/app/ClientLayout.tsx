"use client"; // This is a client-side component

import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the stored theme or determine the initial theme
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);

    // Set the body class based on the theme
    document.body.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    // Update the body class and local storage
    document.body.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      {children}
    </>
  );
}
