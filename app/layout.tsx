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

const title = "Kaixu Tang | Statistics at Peking University";
const description =
  "Kaixu Tang studies statistics at Peking University and conducts research in biostatistics at Yale on statistical genetics and disease-risk prediction from electronic health records.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaixutang.github.io"),
  title,
  description,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.jpg", type: "image/jpeg" }],
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  openGraph: {
    title,
    description,
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
    title,
    description,
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
