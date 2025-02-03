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

export const metadata = {
  title: "Unit Converter | Fast & Accurate Conversions",
  description: "The most beautifully designed unit converter with instant, accurate conversions for length, weight, temperature, and more.",
  keywords: "unit converter, length converter, weight converter, temperature converter, online calculator, metric to imperial, convert units",
  openGraph: {
    title: "Unit Converter | Fast & Accurate Conversions",
    description: "Convert units instantly with the best-designed unit converter online.",
    url: "https://yourdomain.com",
    siteName: "Unit Converter",
    images: [
      {
        url: "https://yourdomain.com/preview-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};