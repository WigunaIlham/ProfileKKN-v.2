import type {Metadata, Viewport} from "next";
import {Plus_Jakarta_Sans, Poppins} from "next/font/google";
import {Analytics} from "@vercel/analytics/next";
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
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.og.title,
    description: SITE_CONFIG.og.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.og.title,
    description: SITE_CONFIG.og.description,
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

// Strips browser-extension attributes (Edge form-fill `fdprocessedid`, Grammarly,
// password managers) that mutate the DOM before React hydrates and would otherwise
// trigger hydration mismatch warnings. Runs as early as possible.
const extensionAttrStripScript = `(function(){
  var attrs = ['fdprocessedid','cz-shortcut-listen','data-new-gr-c-s-check-loaded','data-gr-ext-installed'];
  function clean(root){ attrs.forEach(function(a){ root.querySelectorAll && root.querySelectorAll('['+a+']').forEach(function(el){ el.removeAttribute(a); }); }); }
  clean(document.documentElement);
  new MutationObserver(function(muts){ for (var i=0;i<muts.length;i++){ var m=muts[i]; if(m.type==='attributes' && attrs.indexOf(m.attributeName)>-1) m.target.removeAttribute(m.attributeName); else if(m.type==='childList') m.addedNodes.forEach(function(n){ if(n.nodeType===1) clean(n); }); } }).observe(document.documentElement,{attributes:true,subtree:true,childList:true,attributeFilter:attrs});
})();`;

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{__html: extensionAttrStripScript}}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${poppins.variable}`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SplashScreen />
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
