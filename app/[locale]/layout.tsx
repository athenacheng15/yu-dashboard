import type { Metadata } from 'next';
import { Catamaran } from 'next/font/google';
import './globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const catamaran = Catamaran({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: "YuChun's Dashboard",
    description: 'Welcome to my dashboard!',
};

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = await getMessages();
    return (
        <html lang={locale}>
            <body className={catamaran.className}>
                <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
