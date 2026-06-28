import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Google Drive thumbnail endpoint
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/thumbnail**",
      },
      // Fallback: lspicsum untuk dev
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
