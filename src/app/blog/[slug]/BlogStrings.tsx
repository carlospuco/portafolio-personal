"use client";

import { Text } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export function RecentPostsHeading() {
  const { lang } = useLanguage();
  return (
    <Text as="h2" id="recent-posts" variant="heading-strong-xl" marginBottom="24">
      {translations[lang].blog.recentPosts}
    </Text>
  );
}
