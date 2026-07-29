import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Link,
  Flex,
  HStack,
  Tag,
  VStack,
} from "@chakra-ui/react";
import { MdEmail, MdPhone } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";

export const Header = () => {
  return (
    <Box pt={{ base: 20, md: 32 }} pb={{ base: 16, md: 24 }} textAlign="center">
      <VStack spacing={6} maxW="800px" mx="auto">
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "6xl" }}
          color="#000000"
          lineHeight="1.1"
          letterSpacing="-0.04em"
          fontWeight="900"
        >
          Software Engineer <Text as="span" color="#0088FF">& Builder.</Text>
        </Heading>
        <Text fontSize={{ base: "xl", md: "2xl" }} color="#555555" maxW="640px" fontWeight="400">
          Computer Science student with a passion for software development and a strong desire to learn and grow in the tech industry.

        </Text>
        
        <HStack spacing={4} pt={6} justify="center">
          <Link href="#projects" _hover={{ textDecoration: "none" }}>
            <Button
              bg="#0077FF"
              color="white"
              borderRadius="md"
              px={6}
              py={6}
              fontSize="md"
              fontWeight="600"
              _hover={{ bg: "#006be6" }}
            >
              View Projects
            </Button>
          </Link>
          <Link href="mailto:nzundamahlangu@gmail.com" _hover={{ textDecoration: "none" }}>
            <Button
              bg="#F2F1EE"
              color="#000000"
              variant="solid"
              borderRadius="md"
              px={6}
              py={6}
              fontSize="md"
              fontWeight="600"
              _hover={{ bg: "#E5E4E2" }}
            >
              Contact Me
            </Button>
          </Link>
        </HStack>
      </VStack>

      <Box mt={24}>
        <Text color="#777777" fontSize="sm" fontWeight="500" mb={8} textTransform="uppercase" letterSpacing="0.05em">
          Powered by modern tools & frameworks
        </Text>
        <HStack spacing={10} justify="center" flexWrap="wrap" opacity={0.6}>
          <Text fontWeight="800" fontSize="xl" letterSpacing="-0.02em">React</Text>
          <Text fontWeight="800" fontSize="xl" letterSpacing="-0.02em">TypeScript</Text>
          <Text fontWeight="800" fontSize="xl" letterSpacing="-0.02em">Node.js</Text>
          <Text fontWeight="800" fontSize="xl" letterSpacing="-0.02em">Firebase</Text>
          <Text fontWeight="800" fontSize="xl" letterSpacing="-0.02em">Cloudflare</Text>
        </HStack>
      </Box>
    </Box>
  );
};
