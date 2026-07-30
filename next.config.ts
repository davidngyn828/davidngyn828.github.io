import type { NextConfig } from "next";

/**
 * For a user site (https://davidngyn828.github.io), leave BASE_PATH empty
 * and use a repo named `davidngyn828.github.io`.
 *
 * For a project site (https://davidngyn828.github.io/portfolio), set
 * BASE_PATH=/portfolio in the GitHub Actions workflow.
 */
const basePath = process.env.BASE_PATH?.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  trailingSlash: true,
};

export default nextConfig;
