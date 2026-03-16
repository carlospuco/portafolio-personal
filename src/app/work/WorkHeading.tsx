"use client";

import { Heading } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export default function WorkHeading() {
  const { lang } = useLanguage();
  return (
    <Heading marginBottom="l" variant="heading-strong-xl" align="center">
      {translations[lang].work.title}
    </Heading>
  );
}
