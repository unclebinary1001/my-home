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
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { MdLink } from "react-icons/md";
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  imgUrl: string;
  techstack: string[];
  github: string;
  live: string;
}

const projects: ProjectProps[] = [
  {
    title: "Heart of Love Foundation",
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
    title: "Project 2",
    description: "Description of Project 2",
    imgUrl: "/project2.jpg",
    techstack: ["Tech 3", "Tech 4"],
    github: "https://github.com/project2",
    live: "https://project2.com",
  },
];

const ProjectList = () => {
  return (
    <Stack direction="row" spacing={4} flexWrap={"wrap"} mt={3}>
      {projects.map((project) => (
        <Card
          key={project.title}
          w={"100%"}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          backgroundColor={"#f7f9fc"}
        >
          <Stack>
            <CardBody>
              <Heading size="md">{project.title}</Heading>
              <Text py="2">{project.description}</Text>
              <Stack direction="row" spacing={4} flexWrap={"wrap"} mt={3}>
                {project.techstack.map((tech) => (
                  <Text key={tech} color={"#2d3748"} fontWeight={"medium"}>
                    {tech}
                  </Text>
                ))}
              </Stack>
            </CardBody>

            <CardFooter w={"50%"}>
              <Stack direction="row" spacing={4}>
                {project.github != "" && (
                  <Link href={project.github}>
                    <IconButton
                      isRound={true}
                      color={"#2F6475"}
                      aria-label="Github link Heart of Love site"
                      icon={<FaGithub />}
                      fontSize={"25px"}
                    />
                  </Link>
                )}
                {project.live != "" && (
                  <Link href={project.live}>
                    <IconButton
                      isRound={true}
                      color={"#2F6475"}
                      aria-label="Live Link Heart of Love site"
                      icon={<MdLink />}
                      fontSize={"25px"}
                    />
                  </Link>
                )}
              </Stack>
            </CardFooter>
          </Stack>

          <Spacer />
          <Image
            objectFit="cover"
            padding={{ base: 0, sm: 8 }}
            maxW={{ base: "100%", sm: "400px" }}
            src={project.imgUrl}
            alt={project.title}
          />
        </Card>
      ))}
    </Stack>
  );
};

export const Projects = () => {
  return (
    <Box id="projects" mb={16}>
      <Box mb={8}>
        <HStack align={"center"}>
          <Heading fontSize={"2xl"} color={"#2F6475"}>
            02.
          </Heading>
          <Heading size="lg" color={"#2f374e"}>
            Some Things I've Built
          </Heading>
        </HStack>
        <hr />
      </Box>

      <ProjectList />
    </Box>
  );
};
