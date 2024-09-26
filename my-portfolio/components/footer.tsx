import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box py={4}>
      <Text textAlign={"center"}>
        © 2024 Mahlangu Nzunda
      </Text>
      <Text textAlign="center">
          Made with <span role="img" aria-label="love">❤️</span> and React
        </Text>
    </Box>
  );
};
