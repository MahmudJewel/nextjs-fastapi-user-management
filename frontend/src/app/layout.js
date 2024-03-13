// bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";
// css 
import "./globals.css";

import { Inter } from "next/font/google";
import "./globals.css";
import InstallBootstrap from "@/components/InstallBootstrap";
import NavScrollExample from "@/components/Navbar";
import { getAccessToken } from "@/lib/actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Authentication",
  description: "Developed by Mahmud",
};

export default async function RootLayout({ children }) {
  const loginToken = await getAccessToken()

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* bootstrap  */}
        <InstallBootstrap />
        <NavScrollExample loginToken={loginToken}/>
        {children}
        </body>
    </html>
  );
}
