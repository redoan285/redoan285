export default function manifest() {
  return {
    name: 'RM Redoan',
    short_name: 'RM Redoan',
    description: 'Professional Portfolio of RM Redoan – MERN Stack Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
