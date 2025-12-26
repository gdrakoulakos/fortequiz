"use client";
import { Commissioner } from "next/font/google";

export const commissioner = Commissioner({
  subsets: ["latin", "greek"],
  weight: ["300"],          // Light 300
  style: ["normal"],        // add "italic" if needed
  display: "swap",
});