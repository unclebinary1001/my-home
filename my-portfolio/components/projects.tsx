import {
  Box,
  VStack,
  Image,
  Flex,
  Heading,
  Stack,
  Text,
  HStack,
  CardBody,
  CardFooter,
  Button,
  Card,
} from "@chakra-ui/react";
import { MdEmail, MdPhone } from "react-icons/md";

const TechStack = [
  "Java",
  "Kotlin",
  "Python",
  "React",
  "Typescript",
  "Node.js",
  "Android Studio",
  "Flutter",
  "Figma",
  "Lunacy",
  "Chakra UI",
  "Material UI",
  "Mantine UI",
];

const TechStackList = () => {
  return (
    <Stack direction="row" spacing={4} flexWrap={"wrap"} mt={3}>
      {TechStack.map((tech) => (
        <Text color={"#2d3748"} fontWeight={"bold"} id={tech}>
          {tech}
        </Text>
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
          <Heading size="xl" color={"#2f374e"}>
            Some Things I've Built
          </Heading>
        </HStack>

        <hr />
      </Box>

      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        backgroundColor={"#f7f9fc"}
      >
        

        <Stack>
          <CardBody>
            <Heading size="lg">Heart of Love Foundation</Heading>
            <Text py="2">
              Created a fully functioning web app using React, Tailwind CSS, Cloudflare Workers, Firebase, and Typescript
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>

        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />
      </Card>

    </Box>
  );
};
