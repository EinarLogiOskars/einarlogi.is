import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { regime } from '../app/fonts';

import Header from "./Header/Header";
import MobileNav2 from "./MobileNav/MobileNav";
import { Analytics } from "@vercel/analytics/next";


export default async function BaseLayout({ children, locale}) {
    const messages = await getMessages();

    return (
    <html lang={locale} className={regime.variable}>
        <body>
            <NextIntlClientProvider messages={messages}>
                <MobileNav2 />
                <Header />
                <Analytics />
                {children}
            </NextIntlClientProvider>
        </body>
    </html>
    )
}