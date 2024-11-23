import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions:['page.tsx', 'api.ts', 'api.tsx'],


  async redirects(){
    return [
      {
        source:'/',
        destination:'/home',
        permanent:true
      }
    ]
  }
};

export default nextConfig;
