import type { Metadata } from 'next';
import { Catamaran } from 'next/font/google';
import './globals.css';

const catamaran = Catamaran({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: "YuChun's Dashboard",
    description: 'Welcome to my dashboard!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={catamaran.className}>{children}</body>
        </html>
    );
}
