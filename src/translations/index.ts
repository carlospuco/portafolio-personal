export interface Translations {
  nav: {
    downloadCV: string;
    latestFromBlog: string;
  };
  home: {
    headline: string;
    subline: string;
    aboutButton: string;
  };
  about: {
    role: string;
    introTitle: string;
    introDescription: string;
    technicalTitle: string;
    workTitle: string;
    studiesTitle: string;
    experiences: {
      company: string;
      role: string;
      achievements: string[];
    }[];
    institutions: {
      name: string;
      description: string;
    }[];
  };
  work: {
    title: string;
    relatedProjects: string;
    backToProjects: string;
    readCaseStudy: string;
    viewProject: string;
  };
  ui: {
    seeMore: string;
    seeLess: string;
  };
}

export const en: Translations = {
  nav: {
    downloadCV: "Download CV",
    latestFromBlog: "Latest from the blog",
  },
  home: {
    headline: "Full-Stack Developer · Software Engineer",
    subline:
      "From user-facing interfaces to server-side architecture, I design and build complete web applications with a focus on scalability, clean code, and real-world performance — across every layer of the stack.",
    aboutButton: "About me",
  },
  about: {
    role: "Full-Stack Developer",
    introTitle: "Introduction",
    introDescription:
      "Carlos is a Full-Stack Developer based in Quito, Ecuador, with experience building web applications using React, Angular, Java Spring Boot and Python. He has a solid background in REST API design, relational and non-relational databases, and cloud solutions on Google Cloud Platform. He thrives in Agile/Scrum teams and is passionate about clean code and scalable architectures.",
    technicalTitle: "Technical Skills",
    workTitle: "Work Experience",
    studiesTitle: "Education",
    experiences: [
      {
        company: "Actuaria",
        role: "Software Developer Specialist",
        achievements: [
          "Development and maintenance of web applications with Python (Backend) and React (Frontend), designing RESTful APIs for actuarial and business processes.",
          "Deployed and maintained applications on Google Cloud Platform (GCP) with CI/CD pipelines for automated build, testing and deployment.",
          "Worked with relational databases (MySQL) and non-relational databases (Firebase/NoSQL), collaborating with multidisciplinary teams.",
        ],
      },
      {
        company: "ConsulTI",
        role: "Full-Stack Developer",
        achievements: [
          "Built and maintained web applications with Python (Backend) and React (Frontend), implementing RESTful APIs and integrating MySQL and Firebase databases.",
          "Managed deployments on GCP, implemented CI/CD pipelines, and maintained code quality through unit testing and Git version control.",
        ],
      },
      {
        company: "Banco Pichincha",
        role: "Frontend / Backend Developer",
        achievements: [
          "Developed web components with React and the C3 Design System, applying UX/UI principles and integrating frontend with Java Spring Boot backend services via REST APIs.",
          "Performed code refactoring, improved performance and quality, and supported deployments in an Agile Scrum environment.",
        ],
      },
    ],
    institutions: [
      {
        name: "Universidad de las Fuerzas Armadas ESPE",
        description: "Software Engineering degree, graduated January 2023. Quito, Ecuador.",
      },
      {
        name: "Certifications",
        description:
          "React: De cero a experto (Hooks y MERN) – Udemy · React Native – Udemy · Java Foundation – Oracle Academy · CompTIA Cybersecurity – Udemy",
      },
    ],
  },
  work: {
    title: "Projects",
    relatedProjects: "Related projects",
    backToProjects: "Projects",
    readCaseStudy: "Read case study",
    viewProject: "View project",
  },
  ui: {
    seeMore: "See more",
    seeLess: "See less",
  },
};

export const es: Translations = {
  nav: {
    downloadCV: "Descargar CV",
    latestFromBlog: "Últimas del blog",
  },
  home: {
    headline: "Desarrollador Full-Stack · Ingeniero de Software",
    subline:
      "Desde interfaces de usuario hasta arquitectura del servidor, diseño y construyo aplicaciones web completas con enfoque en escalabilidad, código limpio y rendimiento real — en cada capa del stack.",
    aboutButton: "Sobre mí",
  },
  about: {
    role: "Desarrollador Full-Stack",
    introTitle: "Introducción",
    introDescription:
      "Carlos es un Desarrollador Full-Stack con base en Quito, Ecuador, con experiencia construyendo aplicaciones web con React, Angular, Java Spring Boot y Python. Tiene sólidos conocimientos en diseño de APIs REST, bases de datos relacionales y no relacionales, y soluciones en la nube con Google Cloud Platform. Trabaja bien en equipos Agile/Scrum y es apasionado del código limpio y las arquitecturas escalables.",
    technicalTitle: "Habilidades Técnicas",
    workTitle: "Experiencia Laboral",
    studiesTitle: "Educación",
    experiences: [
      {
        company: "Actuaria",
        role: "Especialista en Desarrollo de Software",
        achievements: [
          "Desarrollo y mantenimiento de aplicaciones web con Python (Backend) y React (Frontend), diseñando APIs RESTful para procesos actuariales y de negocio.",
          "Despliegue y mantenimiento de aplicaciones en Google Cloud Platform (GCP) con pipelines CI/CD para compilación, pruebas y despliegue automatizados.",
          "Trabajo con bases de datos relacionales (MySQL) y no relacionales (Firebase/NoSQL), colaborando con equipos multidisciplinarios.",
        ],
      },
      {
        company: "ConsulTI",
        role: "Desarrollador Full-Stack",
        achievements: [
          "Construcción y mantenimiento de aplicaciones web con Python (Backend) y React (Frontend), implementando APIs RESTful e integrando bases de datos MySQL y Firebase.",
          "Gestión de despliegues en GCP, implementación de pipelines CI/CD y mantenimiento de calidad de código mediante pruebas unitarias y control de versiones con Git.",
        ],
      },
      {
        company: "Banco Pichincha",
        role: "Desarrollador Frontend / Backend",
        achievements: [
          "Desarrollo de componentes web con React y el Design System C3, aplicando principios UX/UI e integrando el frontend con servicios backend en Java Spring Boot mediante APIs REST.",
          "Refactorización de código, mejora de rendimiento y calidad, y soporte en despliegues en un entorno Agile Scrum.",
        ],
      },
    ],
    institutions: [
      {
        name: "Universidad de las Fuerzas Armadas ESPE",
        description: "Ingeniería en Software, graduado enero 2023. Quito, Ecuador.",
      },
      {
        name: "Certificaciones",
        description:
          "React: De cero a experto (Hooks y MERN) – Udemy · React Native – Udemy · Fundamentos de Java – Oracle Academy · Ciberseguridad CompTIA – Udemy",
      },
    ],
  },
  work: {
    title: "Proyectos",
    relatedProjects: "Proyectos relacionados",
    backToProjects: "Proyectos",
    readCaseStudy: "Ver caso de estudio",
    viewProject: "Ver proyecto",
  },
  ui: {
    seeMore: "Ver más",
    seeLess: "Ver menos",
  },
};

export const translations: Record<string, Translations> = { en, es };
