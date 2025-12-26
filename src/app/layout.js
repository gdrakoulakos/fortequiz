"use client";
import { commissioner } from "./fonts";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body
      className={commissioner.className}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          overflowX: "hidden",
          padding: "0",
          margin: "0",
          background:
            "linear-gradient(#ffa5a5 0%, #ffffc2 33%, #c8e7ed 66%, #bfcfff 100%)",
        }}
      >
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
