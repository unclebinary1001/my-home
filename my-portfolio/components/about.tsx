import {
  Box,
  VStack,
  Image,
  Flex,
  Heading,
  Stack,
  Text,
  HStack,
  Spacer,
} from "@chakra-ui/react";

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
  "Tailwind CSS",
];

const TechStackList = () => {
  return (
    <Stack direction="row" spacing={4} flexWrap={"wrap"} mt={6}>
      {TechStack.map((tech) => (
        <Text key={tech} color={"#555555"} fontWeight={"semibold"}>
          {tech}
        </Text>
      ))}
    </Stack>
  );
};

export const About = () => {
  return (
    <Box as="section" id="about" bg="#F7F7F5" color="#000" py={24} mb={24} w="100vw" position="relative" left="50%" right="50%" ml="-50vw" mr="-50vw" borderTop="1px solid #ECECE9" borderBottom="1px solid #ECECE9">
      <Box maxW="1000px" mx="auto" px={4}>
        <Box mb={12} textAlign="center">
          <Heading size="2xl" color={"#000000"} letterSpacing="-0.03em" fontWeight="800">
            About Me
          </Heading>
          <Text color="#555555" mt={4} fontSize="lg" maxW="600px" mx="auto">
            The foundation of my engineering journey and the tools I use.
          </Text>
        </Box>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align={{ md: "center" }}
          justify={{ base: "center", md: "space-between" }}
          gap={{ base: 12, md: 24 }}
        >
          <VStack
            as={"div"}
            width={{ md: "60%" }}
            color={"#333333"}
            fontSize={"lg"}
            lineHeight={1.6}
            spacing={6}
            align={"start"}
          >
            <Text>
              Hi, I'm Mahlangu Nzunda. I build scalable products tailored for specific business and educational needs.
            </Text>
            <Text>
              Throughout my college career, I've had the opportunity to work
              on a variety of projects, ranging from web-based student tools to mobile applications
              that handle production traffic.
            </Text>
            <Text>
              I am currently the Cofounder of the Giants Education Network where
              we publish revision material for high school students in Zambia. I
              also give back as a volunteer at the Heart of Love Foundation, maintaining their website and operations architecture.
            </Text>
            <Text>
              This combination of experience has allowed me to understand and
              effectively deliver value to the end user. Here are a few
              technologies powering my infrastructure:
            </Text>
            <TechStackList />
          </VStack>
          <Box flex={1} display="flex" justifyContent="center">
            <Image
              borderRadius="lg"
              boxSize={{ base: "280px", md: "360px" }}
              objectFit="cover"
              src="/headshot.jpg"
              alt="Mahlangu nzunda"
              boxShadow="0 4px 12px rgba(0,0,0,0.05)"
              border="1px solid #ECECE9"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
