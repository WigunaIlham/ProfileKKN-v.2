import type {Metadata, Viewport} from "next";
import {Plus_Jakarta_Sans, Poppins} from "next/font/google";
import {ThemeProvider} from "@/components/providers/ThemeProvider";
import {SplashScreen} from "@/components/ui/SplashScreen";
import {ScrollProgress} from "@/components/ui/ScrollProgress";
import {BackToTop} from "@/components/ui/BackToTop";
import {SITE_CONFIG} from "@/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.og.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.og.description,
  keywords: [
    "KKN",
    "JamaLights",
    "206",
    "UIN Sunan Gunung Djati",
    "Bandung",
    "Kuliah Kerja Nyata",
    "Pengabdian Masyarakat",
    "KKN 2025",
  ],
  authors: [{name: "KKN JamaLights 206"}],
  creator: "KKN JamaLights 206",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.og.title,
    description: SITE_CONFIG.og.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.og.image,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.og.title,
    description: SITE_CONFIG.og.description,
    images: [SITE_CONFIG.og.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "#ffffff"},
    {media: "(prefers-color-scheme: dark)", color: "#0f172a"},
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${poppins.variable}`}>
        <ThemeProvider>
          <SplashScreen />
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
