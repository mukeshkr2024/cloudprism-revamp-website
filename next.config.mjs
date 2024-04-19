/** @type {import('next').NextConfig} */

import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  images: {
    domains: ["flagcdn.com"],
  },
};

export default withContentlayer({ ...nextConfig });
