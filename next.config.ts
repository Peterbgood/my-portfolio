const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Only use the sub-path if we are building for production (GitHub Pages)
  basePath: isProd ? '/my-portfolio' : '',
};

export default nextConfig;