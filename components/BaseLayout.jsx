import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { regime } from '../app/fonts';

import Header from "./Header/Header";
import MobileNav from "./MobileNav/MobileNav";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head"; // Import next/head for meta tags

export default async function BaseLayout({ children, locale }) {
    const messages = await getMessages();

    return (
        <html lang={locale} className={regime.variable}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            </Head>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <MobileNav />
                    <Header />
                    <Analytics />
                    <SpeedInsights />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}