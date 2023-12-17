import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amauri Ulloa Galicia",
  description: "Portafolio de desarrollo web",
  icons: {
    icon:'/logo.jpeg'
}
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${inter.className} dark:bg-stone-900`}>
        <Providers>
          <Navbar />
          <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
