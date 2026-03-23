"use client";

import React from "react";
import { Icon, Row, Text } from "@once-ui-system/core";
import styles from "./TechCarousel.module.scss";

const TECHS = [
  { name: "React", icon: "react" },
  { name: "Angular", icon: "angular" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Python", icon: "python" },
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "spring" },
  { name: "NestJS", icon: "nestjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: ".NET", icon: "dotnet" },
  { name: "Vue", icon: "vue" },
  { name: "Flutter", icon: "flutter" },
  { name: "Go", icon: "go" },
  { name: "GraphQL", icon: "graphql" },
  { name: "MySQL", icon: "database" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Redis", icon: "redis" },
  { name: "Firebase", icon: "firebase" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Google Cloud", icon: "googlecloud" },
  { name: "AWS", icon: "aws" },
  { name: "GitHub Actions", icon: "githubactions" },
  { name: "Figma", icon: "figma" },
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
