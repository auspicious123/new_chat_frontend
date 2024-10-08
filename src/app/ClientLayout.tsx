"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../lib/hooks/useSocket";
import { useDispatch } from "react-redux";
import { newChatRequestReceived, receiveMessage } from "../redux/slices/chatSlice";
import { NEXT_PUBLIC_BASE_URL } from "@/lib/config";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
//   const [theme, setTheme] = useState<string | null>(null);
  const socket = useSocket(NEXT_PUBLIC_BASE_URL);
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket) {
      socket.on("new-chat-request", (data) => {
        dispatch(newChatRequestReceived(data));
      });

      socket.on("receive-message", (message) => {
        dispatch(receiveMessage(message));
      });
    }

    return () => {
      if (socket) {
        socket.off("new-chat-request");
        socket.off("receive-message");
      }
    };
  }, [socket, dispatch]);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    // setTheme(initialTheme);

    document.body.classList.toggle("dark", initialTheme === "dark");
  }, []);
  return <>{children}</>;
}
