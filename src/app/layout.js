import { commissioner } from "./fonts";
import "./globals.css";
import TabBar from "@/components/organisms/TabBar/TabBar";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body className={commissioner.className}>
        <Providers>
          <TabBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Quizakos! - Παίξε και δοκίμασε τις γνώσεις σου!",
  description:
    "Το Quizakos! είναι μια διασκεδαστική πλατφόρμα κουίζ όπου μπορείς να δοκιμάσεις τις γνώσεις σου στα βασικά μαθήματα του Δημοτικού όπως επίσης και θεωρητικά μαθήματα μουσικής των Ωδείων!",
};
