import { Fugaz_One, Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });
const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Broodl",
  description: "Track your daily mood, every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={'/'}>
        <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>Broodl</h1>
      </Link>
      <div className="flex items-center justify-between">
        PLACEHOLDER
      </div>
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={'text-indigo-500 ' + fugaz.className}>Created with 💛</p>
    </footer>
  )

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body className={'w-full max-width-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 '
          + `${geistSans.variable} ${geistMono.variable} antialiased ` + opensans.className}>
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>

    </html>
  );
}
