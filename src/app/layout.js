"use client";
import { Nunito_Sans } from "next/font/google";
import "./globals.css"; // Ensure global styles are imported
import { AppProvider } from "@/context/AppContext";
import Header from "@/components/organisms/Header/Header";

const nunitoSans = Nunito_Sans({
  weight: "300", // Light
  subsets: ["latin"], // Ensure Latin characters are included
  variable: "--font-nunito-sans", // Optional for CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body>
        <Header />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
