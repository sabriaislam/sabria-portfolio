import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sabria Islam | Designer",
  description: "Aspiring designer in K-12 edtech with case studies and media.",
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
              <Link href="/" className="display text-2xl font-semibold">
                Sabria Islam
              </Link>
              <nav className="flex flex-col gap-3 text-sm font-medium">
                <Link href="/" className="chip nav-link">
                  Work
                </Link>
                <Link href="/media" className="chip nav-link">
                  Media
                </Link>
                <Link href="/about" className="chip nav-link">
                  About
                </Link>
                <a
                  className="chip nav-link"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </nav>
              <p className="text-sm text-[#4b5163]">
                Designing joyful K-12 learning experiences.
              </p>
            </aside>
            <main className="site-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
