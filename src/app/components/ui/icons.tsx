"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function DarkIcon({
  className,
  inverted,
  ...props
}: React.ComponentProps<"svg"> & { inverted?: boolean }) {
  return (
    <svg
      className={cn("size-8 cursor-pointer hover:text-customYellow", className)}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 12.67A6.233 6.233 0 0111.33 4 8.015 8.015 0 1020 12.67z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function LightIcon({
  className,
  inverted,
  ...props
}: React.ComponentProps<"svg"> & { inverted?: boolean }) {
  return (
    <svg
      className={cn("size-8 cursor-pointer hover:text-customYellow", className)}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 3h-3v3h3V3zm0 15h-3v3h3v-3zm-6.803-2.818l2.121 2.121-2.121 2.122-2.122-2.122 2.122-2.121zm12.728-8.485l-2.122-2.122-2.12 2.122 2.12 2.121 2.122-2.121zM15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM6.697 8.818l2.121-2.121-2.121-2.122-2.122 2.122 2.122 2.121zM6 10.5v3H3v-3h3zm15 0v3h-3v-3h3zm-1.576 6.803l-2.12 2.121-2.122-2.12 2.121-2.122 2.121 2.121z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
export function IconBox({
  className,
  inverted,
  ...props
}: React.ComponentProps<"svg"> & { inverted?: boolean }) {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}
export function SendIcon({
  className,
  inverted,
  ...props
}: React.ComponentProps<"svg"> & { inverted?: boolean }) {
  return (
    <svg
      className="w-6 h-6 rotate-90"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
    </svg>
  );
}
export function GalleryIcon({
  className,
  inverted,
  ...props
}: React.ComponentProps<"svg"> & { inverted?: boolean }) {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}

interface TickProps extends React.ComponentProps<"svg"> {
  inverted?: boolean;
  seen?: boolean; // Declare the seen prop here
}
export function Tick({ className, inverted, seen, ...props }: TickProps) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 -0.5 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.03033 11.4697C4.73744 11.1768 4.26256 11.1768 3.96967 11.4697C3.67678 11.7626 3.67678 12.2374 3.96967 12.5303L5.03033 11.4697ZM8.5 16L7.96967 16.5303C8.26256 16.8232 8.73744 16.8232 9.03033 16.5303L8.5 16ZM17.0303 8.53033C17.3232 8.23744 17.3232 7.76256 17.0303 7.46967C16.7374 7.17678 16.2626 7.17678 15.9697 7.46967L17.0303 8.53033ZM9.03033 11.4697C8.73744 11.1768 8.26256 11.1768 7.96967 11.4697C7.67678 11.7626 7.67678 12.2374 7.96967 12.5303L9.03033 11.4697ZM12.5 16L11.9697 16.5303C12.2626 16.8232 12.7374 16.8232 13.0303 16.5303L12.5 16ZM21.0303 8.53033C21.3232 8.23744 21.3232 7.76256 21.0303 7.46967C20.7374 7.17678 20.2626 7.17678 19.9697 7.46967L21.0303 8.53033ZM3.96967 12.5303L7.96967 16.5303L9.03033 15.4697L5.03033 11.4697L3.96967 12.5303ZM9.03033 16.5303L17.0303 8.53033L15.9697 7.46967L7.96967 15.4697L9.03033 16.5303ZM7.96967 12.5303L11.9697 16.5303L13.0303 15.4697L9.03033 11.4697L7.96967 12.5303ZM13.0303 16.5303L21.0303 8.53033L19.9697 7.46967L11.9697 15.4697L13.0303 16.5303Z"
        fill={seen === true ? "#53bdeb" : "#4b5563"}
      />
    </svg>
  );
}
