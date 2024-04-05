import {
  Box,
  VStack,
  Image,
  Flex,
  Heading,
  Stack,
  Text,
  HStack,
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

export const About = () => {
  return (
    <Box id="about" mb={16}>

      <Box mb={4}>

        <HStack align={"center"}>
          <Heading fontSize={"2xl"} color={"#2F6475"}>
            01.
          </Heading>
          <Heading size="lg" color={"#2f374e"}>
            About Me
          </Heading>
        </HStack>
        <hr />
      </Box>

      <Flex align={"center"} justify={"space-between"}>

        <VStack
          width={"60%"}
          color={"#2F6475"}
          fontSize={"md"}
          spacing={5}
          align={"justify"}
        >
          <Text>
            Hi, my name is Mahlangu Nzunda. I'm a Software Engineer and EdTech
            enthusiast.
          </Text>
          <Text>
            Through my college career career, I've had the opportunity to work
            on a variety of projects, ranging from web development to mobile app
            development.
          </Text>
          <Text>
            I am currently the Cofounder of the Giants Education Network where
            we publish revision material for high school students in Zambia. I
            also give back to the community by volunteering back at the Heart of
            Love Foundation and maintaining their website.
          </Text>
          <Text>
            This combination of experience has allowed me to understand and
            effectively deliver value to the end user. Here are a few
            technologies I've been working with recently:
          </Text>
          <TechStackList />
        </VStack>

        <Image
          borderRadius="20px"
          boxSize="400px"
          src="/headshot.jpg"
          alt="Mahlangu nzunda"
        />

      </Flex>
    </Box>
  );
};
