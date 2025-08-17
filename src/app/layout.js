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
  metadataBase: new URL("https://shuvochakma.vercel.app"),
  title: "Shuvo Chakma | Portfolio",
  description: "Portfolio showcasing my projects, skills, and experience.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Shuvo Chakma | Portfolio",
    description: "Portfolio showcasing my projects, skills, and experience.",
    url: "https://shuvochakma.vercel.app",
    siteName: "Shuvo Chakma Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shuvo Chakma Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shuvo Chakma | Portfolio",
    description: "Portfolio showcasing my projects, skills, and experience.",
    images: ["/og-image.png"],
  },
  name: "google-site-verification",
  content: "ap8FrSGLyeZOwQnEJbsZAbtAlgeRkUSf3arIwFdYRYY"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0F172A" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
