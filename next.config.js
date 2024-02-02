/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    CLOUDINARY_CLOUD_NAME:
      process.env.CLOUDINARY_CLOUD_NAME,
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME,
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  images: {
    domains: ["res.cloudinary.com", "s.gravatar.com"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/my-account/**",
      },
    ],
  },
};

module.exports = nextConfig;
