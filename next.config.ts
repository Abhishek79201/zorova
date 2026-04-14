import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Silence the multi-lockfile workspace-root inference warning.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
