import "./globals.css";
import { Inter, Sora, Work_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const work = Work_Sans({ subsets: ["latin"], variable: "--font-work" });

export const metadata = {
  title: "Help Me Out",
  description:
    "This extension helps you record and share help videos with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${work.variable} font-sans`}
    >
      <body>{children}</body>
    </html>
  );
}
