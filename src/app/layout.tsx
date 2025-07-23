import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';

export const metadata = {
  title: 'consoom.io',
  description: 'Consoom, review, and share media.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}