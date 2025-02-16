import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'is'],

    defaultLocale: 'is',

    domains: [
        {
            domain: 'einarlogi.com',
            defaultLocale: 'en',
            locales: ['en']
        },
        {
            domain: 'www.einarlogi.com',
            defaultLocale: 'en',
            locales: ['en']
        },
        {
            domain: 'einarlogi.is',
            defaultLocale: 'is',
            locales: ['is']
        },
        {
            domain: 'www.einarlogi.is',
            defaultLocale: 'is',
        },
        {
            domain: "localhost",
            defaultLocale: "is",
            locales: ['is']
        },
        {
            domain: "localhost:3000",
            defaultLocale: "is",
            locales: ['is']
        },
    ]
});

export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);