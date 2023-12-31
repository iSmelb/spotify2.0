import '@/styles/global.scss';
import type { Metadata } from 'next';
import SidePanel from '@/components/sidePanel/SidePanel';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Providers from '@/redux/Providers';
import Music from './music.svg';

export const metadata: Metadata = {
  title: {
    default: 'Spotify 2.0',
    template: 'Spotify 2.0 | %s',
  },
  description: 'Generated by create next app',
  icons: {
    icon: ['/favicon1.ico?v=4'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="wrapper">
            <SidePanel />
            <div className="main_window">
              <Header />
              <main className="main">
                <div className="content">{children}</div>
              </main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
