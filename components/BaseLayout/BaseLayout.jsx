import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Header from "../Header/Header";
import AppWrapper from "@/app/[locale]/AppWrapper";
import { AnimatePresence } from "framer-motion";

export default async function BaseLayout({ children, locale}) {
    const messages = await getMessages();

    return (
    <html lang={locale}>
        <body
            className={`antialiased`}
        >
            <NextIntlClientProvider messages={messages}>
                <Header />
                <AppWrapper>
                    <AnimatePresence mode="wait">
                        {children}
                    </AnimatePresence>
                </AppWrapper>
            </NextIntlClientProvider>
        </body>
    </html>
    )
}