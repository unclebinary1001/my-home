import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "./header";
import Navbar from "./navbar";
import { About } from "./about";
import { Projects } from "./projects";
import { Footer } from "./footer";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box bg="#ffffff" minH="100vh" overflowX="clip" color="#000000">
      <Box
        position="sticky"
        top={0}
        zIndex={100}
        bg="rgba(255, 255, 255, 0.9)"
        backdropFilter="blur(8px)"
        borderBottom="1px solid rgba(0,0,0,0.05)"
      >
        <Box maxW="1000px" mx="auto" px={4}>
          <Navbar />
        </Box>
      </Box>

      <Box maxW="1000px" mx="auto" px={4} position="relative">
        <Header />
      </Box>

      <About />

      <Box maxW="1000px" mx="auto" px={4}>
        <Projects />
        <Footer />
        {children}
      </Box>
    </Box>
  );
};
