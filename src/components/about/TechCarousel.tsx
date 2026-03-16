"use client";

import React from "react";
import { Icon, Row, Text } from "@once-ui-system/core";
import styles from "./TechCarousel.module.scss";

const TECHS = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Vue", icon: "vue" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Flutter", icon: "flutter" },
  { name: "Python", icon: "python" },
  { name: "Go", icon: "go" },
  { name: "Flask", icon: "flask" },
  { name: "NestJS", icon: "nestjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Java", icon: "java" },
  { name: "Angular", icon: "angular" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Google Cloud", icon: "googlecloud" },
  { name: "Firebase", icon: "firebase" },
  { name: "MySQL", icon: "database" },
];

export default function TechCarousel() {
  // Duplicate to create seamless loop
  const items = [...TECHS, ...TECHS];

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {items.map((tech, index) => (
          <Row
            key={index}
            gap="12"
            vertical="center"
            padding="16"
            paddingX="20"
            radius="m"
            border="neutral-medium"
            background="neutral-weak"
            className={styles.item}
          >
            <Icon name={tech.icon as any} size="xl" onBackground="neutral-strong" />
            <Text variant="body-default-l" onBackground="neutral-strong">
              {tech.name}
            </Text>
          </Row>
        ))}
      </div>
    </div>
  );
}
