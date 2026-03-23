"use client";

import { Heading, Text } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export function BlogPageHeading() {
  const { lang } = useLanguage();
  return (
    <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
      {translations[lang].blog.title}
    </Heading>
  );
}

export function RecentPostsHeading() {
  const { lang } = useLanguage();
  return (
    <Text as="h2" id="recent-posts" variant="heading-strong-xl" marginBottom="24">
      {translations[lang].blog.recentPosts}
    </Text>
  );
}
