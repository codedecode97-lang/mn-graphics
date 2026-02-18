import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.insightwithin.com" },
      { protocol: "https", hostname: "tiimg.tistatic.com" },
      { protocol: "https", hostname: "cpimg.tistatic.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "dn-24.com" },
      { protocol: "https", hostname: "cdn2.bigcommerce.com" },
      { protocol: "https", hostname: "supraprint.pl" },
      { protocol: "https", hostname: "5.imimg.com" },
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "d91ztqmtx7u1k.cloudfront.net" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "ssbspl.com" },
      { protocol: "https", hostname: "amazingsign.co.in" },
      { protocol: "https", hostname: "weetect.com" },
      { protocol: "https", hostname: "www.weetect.com" },
      { protocol: "https", hostname: "static.vecteezy.com" },
    ],
  },
};

export default nextConfig;
