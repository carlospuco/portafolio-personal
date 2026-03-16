"use client";

import { Heading } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export default function BlogHeading() {
  const { lang } = useLanguage();
  return (
    <Heading as="h2" variant="display-strong-xs" wrap="balance">
      {translations[lang].nav.latestFromBlog}
    </Heading>
  );
}
