import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "./globals.css";

import Navbar from "@/app/components/navbar/Navbar";
import GlobalState from "@/services/context/GlobalContext";
import Footer from "@/app/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce app",
  description: "E-commerce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar />
          {children}
          <Footer />
        </GlobalState>
      </body>
    </html>
  );
}
