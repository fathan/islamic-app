import type { Metadata } from "next";
import "./../styles/globals.css";

import NavbarHeader from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Islamic App",
  description: "Islamic App is islamic aplication for muslim user in Indonesia",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main className="bg-[#f5f5f5]">
          <div className="flex flex-col w-full relative 5:pt-[100px] max-w-[500px] my-0 mx-auto bg-white dark:bg-gray-900 box-border overflow-hidden">
            <Providers>
              <NavbarHeader />
              <div className="pt-20">
                {children}
              </div>
              <Footer />
            </Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
