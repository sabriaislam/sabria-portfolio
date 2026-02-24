import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import FlowerCluster from "./components/FlowerCluster";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sabria Islam | Designer",
  description: "Aspiring designer in K-12 edtech with case studies and media.",
  icons: {
    icon: "/Blue.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <div className="page-wrap">
          <div className="site-shell">
            <aside className="site-nav">
              <Link href="/" className="nav-logo">
                <Image
                  src="/sab-logo.svg"
                  alt="Sabria Islam"
                  width={180}
                  height={64}
                  priority
                />
              </Link>
              <FlowerCluster />
              <nav className="flex flex-col gap-1 text-3xl font-semi`bold">
                <Link href="/work" className="chip nav-link">
                  WORK
                </Link>
                <Link href="/media" className="chip nav-link">
                  MEDIA
                </Link>
                <Link href="/about" className="chip nav-link">
                  ABOUT
                </Link>
                <a
                  className="chip nav-link"
                  href="https://drive.google.com/file/d/1VQBPF30rYE1M-lr9mUYOni7jtOBLoFwE/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  RESUME
                </a>
              </nav>
            </aside>
            <main className="site-content">
              {children}
              <SiteFooter />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
