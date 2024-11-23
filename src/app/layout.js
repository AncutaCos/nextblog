import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import { metadata } from "./metadata";  // Importa i metadata dal nuovo file

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="container">
            <Navbar />
            
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
