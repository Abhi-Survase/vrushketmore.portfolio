import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // allowedDevOrigins: ["192.168.0.105"],
  output: "export",
  assetPrefix: "/vrushketmore.portfolio/",
  basePath: "/vrushketmore.portfolio",
  // distDir: "docs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
