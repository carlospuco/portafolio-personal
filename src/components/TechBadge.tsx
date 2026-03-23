"use client";

import { Flex, Text } from "@once-ui-system/core";
import {
  SiPython, SiReact, SiTypescript, SiGooglecloud, SiMysql,
  SiFirebase, SiDocker, SiGit, SiAngular, SiJavascript,
  SiSpring, SiPostgresql, SiMongodb, SiNextdotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const iconMap: Record<string, { icon: React.ElementType; color: string }> = {
  Python:     { icon: SiPython,      color: "#3776AB" },
  React:      { icon: SiReact,       color: "#61DAFB" },
  TypeScript: { icon: SiTypescript,  color: "#3178C6" },
  JavaScript: { icon: SiJavascript,  color: "#F7DF1E" },
  GCP:        { icon: SiGooglecloud, color: "#4285F4" },
  MySQL:      { icon: SiMysql,       color: "#4479A1" },
  Firebase:   { icon: SiFirebase,    color: "#FFCA28" },
  Docker:     { icon: SiDocker,      color: "#2496ED" },
  Git:        { icon: SiGit,         color: "#F05032" },
  Angular:    { icon: SiAngular,     color: "#DD0031" },
  Java:       { icon: FaJava,        color: "#007396" },
  "Spring Boot": { icon: SiSpring,   color: "#6DB33F" },
  PostgreSQL: { icon: SiPostgresql,  color: "#4169E1" },
  MongoDB:    { icon: SiMongodb,     color: "#47A248" },
  "Next.js":  { icon: SiNextdotjs,   color: "#ffffff" },
};

interface TechBadgeProps {
  tech: string;
}

function TechBadge({ tech }: TechBadgeProps) {
  const entry = iconMap[tech];
  if (!entry) return null;
  const Icon = entry.icon;

  return (
    <Flex
      vertical="center"
      gap="6"
      padding="6"
      paddingX="10"
      radius="s"
      background="neutral-alpha-weak"
      border="neutral-alpha-weak"
      style={{ display: "inline-flex" }}
    >
      <Icon size={14} color={entry.color} />
      <Text variant="label-default-xs" onBackground="neutral-weak">
        {tech}
      </Text>
    </Flex>
  );
}

interface TechStackProps {
  stack: string[];
}

export function TechStack({ stack }: TechStackProps) {
  if (!stack || stack.length === 0) return null;
  return (
    <Flex gap="8" wrap>
      {stack.map((tech) => (
        <TechBadge key={tech} tech={tech} />
      ))}
    </Flex>
  );
}
