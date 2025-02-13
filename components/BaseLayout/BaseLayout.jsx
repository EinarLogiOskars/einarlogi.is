import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Header from "../Header/Header";

export default async function BaseLayout({ children, locale}) {
    const messages = await getMessages();

    return (
    <html lang={locale}>
        <body
            className={`antialiased`}
        >
            <NextIntlClientProvider messages={messages}>
                <Header />
                {children}
            </NextIntlClientProvider>
        </body>
    </html>
    )
}