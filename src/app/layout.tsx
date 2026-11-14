import type { Metadata } from 'next';
import { Archivo, Pacifico, Baloo_2 } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteEffects from '@/components/SiteEffects';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-archivo',
});
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'], variable: '--font-pacifico' });
const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-baloo',
});

export const metadata: Metadata = {
  title: 'Halal Corn Dog — Best Street Food',
  description:
    'Golden Korean-style corn dogs, fried fresh at the stall and finished your way — crunchy coatings, a proper mozzarella pull, and sauces squeezed on to order. 100% halal.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${pacifico.variable} ${baloo.variable}`}>
      <body>
        {/* Arms the scroll-reveal before first paint: without JS this never
            runs and every .reveal stays visible (safe default). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js-reveal')" }} />
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
