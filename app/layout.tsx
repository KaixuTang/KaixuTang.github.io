import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaixutang.github.io"),
  title: "Kaixu Tang | Academic Homepage",
  description:
    "Kaixu Tang is an undergraduate student in the Department of Statistics at Peking University and an Undergraduate Research Fellow at Yale University.",
  openGraph: {
    title: "Kaixu Tang | Academic Homepage",
    description:
      "Statistics undergraduate at Peking University and research fellow at Yale University, currently seeking PhD opportunities.",
    type: "website",
    url: "https://kaixutang.github.io",
    images: [
      {
        url: "/og.png",
        width: 1732,
        height: 908,
        alt: "Kaixu Tang academic homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaixu Tang | Academic Homepage",
    description:
      "Statistics undergraduate at Peking University and research fellow at Yale University, currently seeking PhD opportunities.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
