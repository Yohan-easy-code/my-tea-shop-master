// layout.js
import Head from 'next/head';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Thé Tip Top",
  description: "Thé Tip Top - Roue de la Fortune",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico"  />
      </Head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
