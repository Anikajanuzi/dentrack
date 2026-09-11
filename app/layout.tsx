import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'DENTRACK — Your lab. In sync.', description: 'Dental laboratory management' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
