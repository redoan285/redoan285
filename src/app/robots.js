export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://my-portfolio-lake-chi-f0cf9xubd5.vercel.app/sitemap.xml',
  };
}
