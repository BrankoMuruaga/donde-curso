import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.cache = {
      type: "filesystem",
      compression: "gzip", // Reducir tamaño de la caché
      store: "pack", // Optimizar almacenamiento
      allowCollectingMemory: true,
    };
    return config;
  },
};

export default nextConfig;
