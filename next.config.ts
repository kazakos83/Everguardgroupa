import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export to allow full App Router compatibility
  // Add back 'output: export' if deploying to static hosting (Netlify, S3, etc.)
};

export default nextConfig;
