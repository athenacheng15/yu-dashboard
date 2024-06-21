import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
    title: "YuChun's Dashboard",
    description: 'Welcome to my dashboard!',
};

import { Sidebar } from './(dashboard)/_components/sidebar';
import { Navbar } from './(dashboard)/_components/nav-bar';

import { ModalProvider } from '@/components/providers/modal-provider';

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
            <body className={roboto.className}>
                <NextIntlClientProvider messages={messages}>
                    <ModalProvider />
                    <Navbar />
                    <main className="flex">
                        <div className="fixed left-0 top-0 hidden h-full w-64 shrink-0 md:block">
                            <Sidebar />
                        </div>
                        <div className="w-full bg-white md:ml-64">
                            <div className="min-h-[100vh] bg-[linear-gradient(to_right,#69866c30_1px,transparent_1px),linear-gradient(to_bottom,#69866c30_1px,transparent_1px)] bg-[size:16px_16px] ">
                                <div className="p-6 pt-20 md:p-10">{children}</div>
                            </div>
                        </div>
                    </main>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
