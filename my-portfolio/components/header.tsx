import { Box, Heading, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box maxW={"32 rem"}>
      <Text mb={8} color={'#6096ba'}>Hi, my name is</Text>
      <Heading size="3xl" color={'#274c77'} mb={4}>Mahlangu Nzunda.</Heading>
      <Heading mb={8} color={'#274c77'} size="3xl">
        Software Engineer | EdTech Enthusiast
      </Heading>
      <Text fontSize={"lg"}>
        Computer Engineering student with a passion for software development and
        a strong desire to learn and grow in the tech industry.
      </Text>
    </Box>
  );
};
