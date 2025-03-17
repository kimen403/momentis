import "./globals.css";
import { Poppins, Lateef, Amiri } from "next/font/google";

// Load Amiri as our Islamic font
const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["latin", "arabic"],
  display: "swap",
  variable: "--font-amiri",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const lateef = Lateef({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-lateef",
});

export const metadata = {
  title: "Lebaran 2025",
  description: "Celebrate Lebaran 2025",
  images: {
    favicon: "/LogoStoryId.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={amiri.variable}>
      <body
        className={`${poppins.variable} ${lateef.variable} font-sans p-0 m-0 antialiased flex flex-col justify-center max-w-6xl mx-auto `}
      >
        {children}
      </body>
    </html>
  );
}
