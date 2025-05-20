import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Todo App',
  description: 'A simple Next.js todo list application',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
