import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import AppWrapper from "./AppWrapper";
import Header from "@/components/Header/Header";

import "../styles/globals.css";
import BaseLayout from "@/components/BaseLayout/BaseLayout";

export const metadata = {
  title: "Einar Logi | Portfolio",
  description: "Portfolio and personal website of Einar Logi",
};

export default async function LocaleLayout({ children, params }) {
  const awaitedParams = await params
  const { locale } = awaitedParams;
  // Ensure that the incoming 'locale' is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <BaseLayout locale={locale}>{children}</BaseLayout>
  );
}
