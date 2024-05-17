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
    title: "TQ Calculator",
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
        _hover={{ transitionDuration: '300ms',cursor: 'pointer', transform: 'scale(1.01)', boxShadow: 'xl', borderColor: '#2F6475', borderWidth: '1px', borderStyle: 'solid', borderRadius: 'xl'}}
          key={project.title}
          direction={{ base: "column", md: "row" }}
          overflow="hidden"
          variant="outline"
          backgroundColor={"#e2e8f0"}
          paddingX={{base:1, md:8}}
          paddingY={{base:2, md:8}}
        >
          <Stack spacing={{base: 0, md: 4}}>
            <CardBody>
              <Heading size="md">{project.title}</Heading>
              <Text py={4}>{project.description}</Text>
              <Stack direction="row" spacing={3} flexWrap={"wrap"}>
                {project.techstack.map((tech) => (
                  <Text key={tech} color={"#2d3748"} fontWeight={"medium"}>
                    {tech}
                  </Text>
                ))}
              </Stack>
            </CardBody>

            <CardFooter>
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
            paddingX={{base:4, md:8}}
            paddingY={{ base: 0, sm: 8 }}
            marginX={{ base: "auto"}}
            maxW={{ base: "100%", sm: '90%', md: "400px" }}
            h={{ base: "100%", sm: "300px"}}
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
