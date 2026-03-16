"use client";

import {
  Avatar, Button, Column, Heading, Icon, IconButton, Tag, Text, Row,
} from "@once-ui-system/core";
import { about, person, social } from "@/resources";
import TechCarousel from "@/components/about/TechCarousel";
import ExperienceCard from "@/components/about/ExperienceCard";
import TableOfContents from "@/components/about/TableOfContents";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import styles from "@/components/about/about.module.scss";
import React from "react";

export default function AboutPageContent() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  const structure = [
    { title: t.introTitle,    display: about.intro.display,    items: [] },
    { title: t.technicalTitle, display: about.technical.display, items: [] },
    { title: t.workTitle,     display: about.work.display,     items: about.work.experiences.map((e) => e.company) },
    { title: t.studiesTitle,  display: about.studies.display,  items: about.studies.institutions.map((i) => i.name) },
  ];

  const experiences = about.work.experiences.map((exp, i) => ({
    ...exp,
    role: t.experiences[i]?.role ?? exp.role,
    achievements: (t.experiences[i]?.achievements ?? []).map((a) => <>{a}</>),
  }));

  const institutions = about.studies.institutions.map((inst, i) => ({
    ...inst,
    description: <>{t.institutions[i]?.description ?? ""}</>,
  }));

  return (
    <>
    <TableOfContents structure={structure} about={about} />
    <Row fillWidth s={{ direction: "column" }} horizontal="center">
      {about.avatar.display && (
        <Column
          className={styles.avatar}
          top="64"
          fitHeight
          position="sticky"
          s={{ position: "relative", style: { top: "auto" } }}
          xs={{ style: { top: "auto" } }}
          minWidth="160"
          paddingX="l"
          paddingBottom="xl"
          gap="m"
          flex={3}
          horizontal="center"
        >
          <Avatar src={person.avatar} size="xl" />
          <Row gap="8" vertical="center">
            <Icon onBackground="accent-weak" name="globe" />
            Quito, Ecuador
          </Row>
          {person.languages && person.languages.length > 0 && (
            <Row wrap gap="8">
              {person.languages.map((language, index) => (
                <Tag key={index} size="l">{language}</Tag>
              ))}
            </Row>
          )}
        </Column>
      )}

      <Column className={styles.blockAlign} flex={9} maxWidth={40}>
        <Column
          id={t.introTitle}
          fillWidth
          minHeight="160"
          vertical="center"
          marginBottom="32"
        >
          <Heading className={styles.textAlign} variant="display-strong-xl">
            {person.name}
          </Heading>
          <Text
            className={styles.textAlign}
            variant="display-default-xs"
            onBackground="neutral-weak"
          >
            {t.role}
          </Text>
          {social.length > 0 && (
            <Row
              className={styles.blockAlign}
              paddingTop="20"
              paddingBottom="8"
              gap="8"
              wrap
              horizontal="center"
              fitWidth
              data-border="rounded"
            >
              {social.filter((item) => item.essential).map((item) =>
                item.link && (
                  <React.Fragment key={item.name}>
                    <Row s={{ hide: true }}>
                      <Button
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name}
                        size="s"
                        weight="default"
                        variant="secondary"
                      />
                    </Row>
                    <Row hide s={{ hide: false }}>
                      <IconButton
                        size="l"
                        href={item.link}
                        icon={item.icon}
                        variant="secondary"
                      />
                    </Row>
                  </React.Fragment>
                )
              )}
            </Row>
          )}
        </Column>

        {about.intro.display && (
          <ScrollReveal direction="up">
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {t.introDescription}
            </Column>
          </ScrollReveal>
        )}

        {about.technical.display && (
          <ScrollReveal direction="up">
            <Column fillWidth marginBottom="80">
              <Heading
                as="h2"
                id={t.technicalTitle}
                variant="display-strong-s"
                marginBottom="40"
              >
                {t.technicalTitle}
              </Heading>
              <TechCarousel />
            </Column>
          </ScrollReveal>
        )}

        {about.work.display && (
          <>
            <ScrollReveal direction="left">
              <Heading as="h2" id={t.workTitle} variant="display-strong-s" marginBottom="m">
                {t.workTitle}
              </Heading>
            </ScrollReveal>
            <Column fillWidth gap="m" marginBottom="40">
              {experiences.map((experience, index) => (
                <ScrollReveal key={`${experience.company}-${index}`} direction="up" delay={index * 100}>
                  <span id={experience.company}>
                    <ExperienceCard experience={experience} lang={lang} />
                  </span>
                </ScrollReveal>
              ))}
            </Column>
          </>
        )}

        {about.studies.display && (
          <>
            <ScrollReveal direction="left">
              <Heading as="h2" id={t.studiesTitle} variant="display-strong-s" marginBottom="m">
                {t.studiesTitle}
              </Heading>
            </ScrollReveal>
            <Column fillWidth gap="l" marginBottom="40">
              {institutions.map((institution, index) => (
                <ScrollReveal key={`${institution.name}-${index}`} direction="up" delay={index * 120}>
                  <Column fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                </ScrollReveal>
              ))}
            </Column>
          </>
        )}
      </Column>
    </Row>
    </>
  );
}
