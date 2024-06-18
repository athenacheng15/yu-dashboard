import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'zh-TW', 'ja'];

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) {
        console.log('notFound');
        notFound();
    }

    return {
        messages: (await import(`./messages/${locale}.json`)).default,
    };
});
