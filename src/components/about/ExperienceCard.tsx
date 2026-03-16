"use client";

import React, { useState } from "react";
import { Avatar, Column, Heading, Icon, Row, Text } from "@once-ui-system/core";
import { translations } from "@/translations";
import type { Language } from "@/contexts/LanguageContext";

interface Experience {
  company: string;
  timeframe: string;
  role: string;
  location?: string;
  logo?: string;
  achievements: React.ReactNode[];
}

interface ExperienceCardProps {
  experience: Experience;
  lang?: Language;
}

export default function ExperienceCard({ experience, lang = "en" }: ExperienceCardProps) {
  const t = translations[lang].ui;
  const [expanded, setExpanded] = useState(false);

  const PREVIEW_COUNT = 3;
  const hasMore = experience.achievements.length > PREVIEW_COUNT;
  const visible = expanded
    ? experience.achievements
    : experience.achievements.slice(0, PREVIEW_COUNT);

  return (
    <Column
      fillWidth
      padding="l"
      radius="l"
      border="neutral-medium"
      background="neutral-weak"
      gap="m"
    >
      {/* Header: logo + role + company */}
      <Row gap="m" vertical="start">
        <Avatar
          src={experience.logo}
          value={experience.company.charAt(0)}
          size="l"
        />
        <Column gap="4">
          <Heading variant="heading-strong-l">{experience.role}</Heading>
          <Text variant="body-default-m" onBackground="brand-weak">
            {experience.company}
          </Text>
        </Column>
      </Row>

      {/* Badges: timeframe + location */}
      <Row gap="8" wrap>
        <Row
          gap="8"
          vertical="center"
          padding="4"
          paddingX="12"
          radius="full"
          border="neutral-medium"
          fitWidth
        >
          <Icon name="calendar" size="xs" onBackground="neutral-weak" />
          <Text variant="body-default-s" onBackground="neutral-weak">
            {experience.timeframe}
          </Text>
        </Row>

        {experience.location && (
          <Row
            gap="8"
            vertical="center"
            padding="4"
            paddingX="12"
            radius="full"
            border="brand-alpha-medium"
            background="brand-alpha-weak"
            fitWidth
          >
            <Icon name="mapPin" size="xs" onBackground="brand-weak" />
            <Text variant="body-default-s" onBackground="brand-weak">
              {experience.location}
            </Text>
          </Row>
        )}
      </Row>

      {/* Achievements */}
      <Column as="ul" gap="12">
        {visible.map((achievement, index) => (
          <Text as="li" variant="body-default-m" key={index}>
            {achievement}
          </Text>
        ))}
      </Column>

      {/* See more / See less */}
      {hasMore && (
        <Row
          fitWidth
          gap="4"
          vertical="center"
          onClick={() => setExpanded(!expanded)}
          style={{ cursor: "pointer" }}
        >
          <Text variant="body-default-s" onBackground="brand-weak">
            {expanded ? t.seeLess : t.seeMore}
          </Text>
          <Icon
            name={expanded ? "chevronUp" : "chevronDown"}
            size="xs"
            onBackground="brand-weak"
          />
        </Row>
      )}
    </Column>
  );
}
