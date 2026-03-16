"use client";

import { Heading, SmartLink, Text } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export function BackToProjects() {
  const { lang } = useLanguage();
  return (
    <SmartLink href="/work">
      <Text variant="label-strong-m">{translations[lang].work.backToProjects}</Text>
    </SmartLink>
  );
}

export function RelatedProjectsHeading() {
  const { lang } = useLanguage();
  return (
    <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
      {translations[lang].work.relatedProjects}
    </Heading>
  );
}
