import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // allowedDevOrigins: ["192.168.0.105"],
  output: "export",
  assetPrefix: "/vrushketmore.github.io/",
  basePath: "/vrushketmore.github.io",
  // distDir: "docs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
