// bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";

import { Inter } from "next/font/google";
import "./globals.css";
import InstallBootstrap from "@/components/InstallBootstrap";
import NavScrollExample from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Authentication",
  description: "Developed by Mahmud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* bootstrap  */}
        <InstallBootstrap />
        <NavScrollExample />
        {children}
        </body>
    </html>
  );
}
