import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box py={8} mt={16} borderTop="1px solid rgba(0,0,0,0.05)">
      <Text textAlign="center" color="#425466" fontSize="sm" fontWeight="medium">
        © 2024 - {new Date().getFullYear()} Mahlangu Nzunda
      </Text>
      <Text textAlign="center" color="#425466" fontSize="sm" mt={2}>
          Built with <span role="img" aria-label="love">❤️</span>, React, and an obsession with detail.
        </Text>
    </Box>
  );
};
