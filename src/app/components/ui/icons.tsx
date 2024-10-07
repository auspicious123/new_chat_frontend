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
