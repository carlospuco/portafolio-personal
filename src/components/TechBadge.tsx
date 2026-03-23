"use client";

import { Flex, Text } from "@once-ui-system/core";
import {
  SiPython, SiReact, SiTypescript, SiGooglecloud, SiMysql,
  SiFirebase, SiDocker, SiGit, SiAngular, SiJavascript,
  SiSpring, SiPostgresql, SiMongodb, SiNextdotjs,
  SiNestjs, SiPhp, SiDotnet, SiFigma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const iconMap: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  Python:       { icon: SiPython,      color: "#3776AB", bg: "rgba(55,118,171,0.12)" },
  React:        { icon: SiReact,       color: "#61DAFB", bg: "rgba(97,218,251,0.12)" },
  TypeScript:   { icon: SiTypescript,  color: "#3178C6", bg: "rgba(49,120,198,0.12)" },
  JavaScript:   { icon: SiJavascript,  color: "#F7DF1E", bg: "rgba(247,223,30,0.12)" },
  GCP:          { icon: SiGooglecloud, color: "#4285F4", bg: "rgba(66,133,244,0.12)" },
  MySQL:        { icon: SiMysql,       color: "#4479A1", bg: "rgba(68,121,161,0.12)" },
  Firebase:     { icon: SiFirebase,    color: "#FFCA28", bg: "rgba(255,202,40,0.12)" },
  Docker:       { icon: SiDocker,      color: "#2496ED", bg: "rgba(36,150,237,0.12)" },
  Git:          { icon: SiGit,         color: "#F05032", bg: "rgba(240,80,50,0.12)"  },
  Angular:      { icon: SiAngular,     color: "#DD0031", bg: "rgba(221,0,49,0.12)"   },
  Java:         { icon: FaJava,        color: "#007396", bg: "rgba(0,115,150,0.12)"  },
  "Spring Boot":{ icon: SiSpring,      color: "#6DB33F", bg: "rgba(109,179,63,0.12)" },
  PostgreSQL:   { icon: SiPostgresql,  color: "#4169E1", bg: "rgba(65,105,225,0.12)" },
  MongoDB:      { icon: SiMongodb,     color: "#47A248", bg: "rgba(71,162,72,0.12)"  },
  "Next.js":    { icon: SiNextdotjs,   color: "#ffffff", bg: "rgba(255,255,255,0.08)"},
  NestJS:       { icon: SiNestjs,      color: "#E0234E", bg: "rgba(224,35,78,0.12)"  },
  PHP:          { icon: SiPhp,         color: "#777BB4", bg: "rgba(119,123,180,0.12)"},
  ".NET":       { icon: SiDotnet,      color: "#512BD4", bg: "rgba(81,43,212,0.12)"  },
  Figma:        { icon: SiFigma,       color: "#F24E1E", bg: "rgba(242,78,30,0.12)"  },
};

interface TechBadgeProps {
  tech: string;
  index?: number;
}

function TechBadge({ tech, index = 0 }: TechBadgeProps) {
  const entry = iconMap[tech];
  if (!entry) return null;
  const Icon = entry.icon;

  return (
    <Flex
      vertical="center"
      gap="6"
      style={{
        display: "inline-flex",
        padding: "5px 12px",
        borderRadius: "8px",
        background: entry.bg,
        border: `1px solid ${entry.color}35`,
        backdropFilter: "blur(4px)",
        opacity: 0,
        transform: "translateY(10px) scale(0.95)",
        animation: `badgeIn 0.4s cubic-bezier(0.16,1,0.3,1) ${index * 50}ms forwards`,
        cursor: "default",
      }}
    >
      <Icon size={15} color={entry.color} />
      <Text
        variant="label-default-xs"
        style={{ color: entry.color, fontWeight: 600, letterSpacing: "0.02em" }}
      >
        {tech}
      </Text>
      <style>{`
        @keyframes badgeIn {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </Flex>
  );
}

interface TechStackProps {
  stack: string[];
}

export function TechStack({ stack }: TechStackProps) {
  if (!stack || stack.length === 0) return null;
  return (
    <Flex gap="8" wrap style={{ marginTop: "4px" }}>
      {stack.map((tech, i) => (
        <TechBadge key={tech} tech={tech} index={i} />
      ))}
    </Flex>
  );
}
