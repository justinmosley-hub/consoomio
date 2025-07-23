import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';

export const metadata = {
  title: 'OmniReview',
  description: 'All your media in one place.',
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