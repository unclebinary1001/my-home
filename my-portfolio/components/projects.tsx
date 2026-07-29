import {
  Box,
  Link,
  Image,
  Heading,
  Stack,
  Text,
  HStack,
  CardBody,
  CardFooter,
  Card,
  Button,
  Badge,
  Wrap,
  WrapItem,
  Spacer,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { MdLink } from "react-icons/md";
import React from "react";

interface ProjectProps {
  title: string;
  outcome: string;
  role: string;
  description: string;
  imgUrl: string;
  techstack: string[];
  github: string;
  live: string;
}

const projects: ProjectProps[] = [
  {
    title: "Heart of Love Foundation",
    outcome: "Delivered a production website that supports outreach and donation workflows.",
    role: "Frontend Engineer",
    description:
      "Created a fully functioning website following the client's template and design. The site is used to manage the foundation's activities and donations.",
    imgUrl: "/hol_pic.jpg",
    techstack: [
      "React",
      "Typescript",
      "Node.js",
      "Vite",
      "Tailwind CSS",
      "Cloudflare Workers",
      "Firebase",
    ],
    github: "https://github.com/unclebinary1001/hol_web",
    live: "https://heartoflovefoundation.com/",
  },
  {
    title: "TQ Calculator",
    outcome: "Built a student-focused calculator for a core engineering economy course.",
    role: "Product Developer",
    description: "Web app taiored for students enrolled in Mr. Turnquest's engineering economy class.",
    imgUrl: "/tq_calc.jpg",
    techstack: ["React", "Typescript", "Mantine UI", "Vite"],
    github: "https://github.com/unclebinary1001/tqcalculator",
    live: "https://tqcalculator.vercel.app",
  },
];

const ProjectList = () => {
  return (
    <Stack direction="column" spacing={10} flexWrap={"wrap"} mt={3}>
      {projects.map((project) => (
        <Card
          _hover={{
            cursor: "pointer",
            bg: "#ECECE9",
          }}
          transition="background-color 0.2s"
          key={project.title}
          direction={{ base: "column", md: "row" }}
          overflow="hidden"
          variant="outline"
          backgroundColor="#F7F7F5"
          boxShadow="none"
          border="1px solid #E5E5E5"
          borderRadius="lg"
          paddingX={{ base: 4, md: 8 }}
          paddingY={{ base: 6, md: 8 }}
        >
          <Stack spacing={{ base: 4, md: 4 }} flex={1}>
            <CardBody p={0}>
              <Text fontSize="sm" color="#777777" fontWeight="600" textTransform="uppercase" letterSpacing="0.05em">
                  {project.role}
              </Text>
              <Heading size="lg" color="#000000" letterSpacing="-0.02em" mt={1} mb={2} fontWeight="700">
                {project.title}
              </Heading>
              
              <Text mt={2} color="#000000" fontWeight="600" fontSize="md">
                {project.outcome}
              </Text>
              <Text py={4} color="#555555" fontSize="md" lineHeight={1.6}>
                {project.description}
              </Text>
              
              <Stack direction="row" spacing={3} flexWrap="wrap">
                {project.techstack.map((tech) => (
                  <Text key={tech} color="#777777" fontWeight="500" fontSize="sm">
                    {tech}
                  </Text>
                ))}
              </Stack>
            </CardBody>

            <CardFooter p={0}>
              <Stack direction="row" spacing={4} mt={4}>
                {project.live !== "" && (
                  <Link href={project.live} _hover={{ textDecoration: "none" }}>
                    <Button bg="#000000" color="white" borderRadius="md" px={6} _hover={{ bg: "#333333" }} size="sm">
                      View Demo
                    </Button>
                  </Link>
                )}
                {project.github !== "" && (
                  <Link href={project.github} _hover={{ textDecoration: "none" }}>
                    <Button variant="ghost" color="#000000" borderRadius="md" px={6} _hover={{ bg: "#E5E4E2" }} size="sm">
                      Code
                    </Button>
                  </Link>
                )}
              </Stack>
            </CardFooter>
          </Stack>
          <Box flex={1} display="flex" justifyContent="center" alignItems="center" mt={{ base: 8, md: 0 }}>
            <Image
              objectFit="cover"
              borderRadius="md"
              boxShadow="0 4px 12px rgba(0,0,0,0.05)"
              border="1px solid #E5E5E5"
              maxW={{ base: "100%", md: "90%" }}
              src={project.imgUrl}
              alt={project.title}
            />
          </Box>
        </Card>
      ))}
    </Stack>
  );
};

export const Projects = () => {
  return (
    <Box id="projects" mb={24}>
      <Box mb={12} textAlign="center">
        <Heading size="2xl" color="#000000" letterSpacing="-0.03em" fontWeight="800">
          Some Things I've Built
        </Heading>
        <Text color="#555555" mt={4} fontSize="lg" maxW="600px" mx="auto">
          Projects I'm proud to showcase to the world.
        </Text>
      </Box>

      <ProjectList />
    </Box>
  );
};
