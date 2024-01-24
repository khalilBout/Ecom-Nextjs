import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "./globals.css";

import Navbar from "@/app/components/navbar/Navbar";
import GlobalState from "@/services/context/GlobalContext";
import Footer from "@/app/components/footer/Footer";
import AuthProvider from "@/app/components/AuthProvider/AuthProvider";
import ReduxProv from "@/app/components/ReduxProv";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce app",
  description: "E-commerce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ReduxProv>
            <GlobalState>
              <Navbar />
              {children}
              <Toaster position="bottom-right" />
              <Footer />
            </GlobalState>
          </ReduxProv>
        </AuthProvider>
      </body>
    </html>
  );
}
