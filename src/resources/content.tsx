import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Carlos",
  lastName: "Puco",
  name: `Carlos Puco`,
  role: "Full-Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "carlos.puco.mb@gmail.com",
  location: "America/Guayaquil", // Quito, Ecuador
  languages: ["Español", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about software development and technology</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/carlos-puco",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/carlos-puco",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-Stack Developer · Software Engineer</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest project
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      From user-facing interfaces to server-side architecture, I design and build complete web applications with a focus on scalability, clean code, and real-world performance — across every layer of the stack.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, Full-Stack Developer from Quito, Ecuador`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Carlos is a Full-Stack Developer based in Quito, Ecuador, with experience building web
        applications using React, Angular, Java Spring Boot and Python. He has a solid background
        in REST API design, relational and non-relational databases, and cloud solutions on Google
        Cloud Platform. He thrives in Agile/Scrum teams and is passionate about clean code and
        scalable architectures.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Actuaria",
        timeframe: "Jan 2025 – Present",
        role: "Software Developer Specialist",
        achievements: [
          <>
            Development and maintenance of web applications with Python (Backend) and React
            (Frontend), designing RESTful APIs for actuarial and business processes.
          </>,
          <>
            Deployed and maintained applications on Google Cloud Platform (GCP) with CI/CD
            pipelines for automated build, testing and deployment.
          </>,
          <>
            Worked with relational databases (MySQL) and non-relational databases (Firebase/NoSQL),
            collaborating with multidisciplinary teams.
          </>,
        ],
        images: [],
      },
      {
        company: "ConsulTI",
        timeframe: "Jun 2023 – Jan 2025",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Built and maintained web applications with Python (Backend) and React (Frontend),
            implementing RESTful APIs and integrating MySQL and Firebase databases.
          </>,
          <>
            Managed deployments on GCP, implemented CI/CD pipelines, and maintained code quality
            through unit testing and Git version control.
          </>,
        ],
        images: [],
      },
      {
        company: "Banco Pichincha",
        timeframe: "Apr 2022 – Jun 2023",
        role: "Frontend / Backend Developer",
        achievements: [
          <>
            Developed web components with React and the C3 Design System, applying UX/UI principles
            and integrating frontend with Java Spring Boot backend services via REST APIs.
          </>,
          <>
            Performed code refactoring, improved performance and quality, and supported deployments
            in an Agile Scrum environment.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Universidad de las Fuerzas Armadas ESPE",
        description: <>Software Engineering degree, graduated January 2023. Quito, Ecuador.</>,
      },
      {
        name: "Certifications",
        description: (
          <>
            React: De cero a experto (Hooks y MERN) – Udemy · React Native – Udemy · Java
            Foundation – Oracle Academy · CompTIA Cybersecurity – Udemy
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            Building modern, responsive UIs with React and Angular. Proficient in HTML5, CSS3,
            TypeScript and component-driven development.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "Next.js", icon: "nextjs" },
        ],
        images: [],
      },
      {
        title: "Backend & Cloud",
        description: (
          <>
            Designing RESTful APIs with Java Spring Boot and Python. Deploying scalable solutions
            on Google Cloud Platform with Docker and CI/CD pipelines.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Spring", icon: "spring" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
      {
        title: "Databases",
        description: (
          <>
            Experience with relational databases (MySQL) and non-relational databases (Firebase /
            NoSQL) for diverse application needs.
          </>
        ),
        tags: [
          { name: "MySQL", icon: "database" },
          { name: "Firebase", icon: "firebase" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about software development and tech...",
  description: `Articles and thoughts by ${person.name} on web development, cloud and best practices`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full-stack web projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A visual collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
