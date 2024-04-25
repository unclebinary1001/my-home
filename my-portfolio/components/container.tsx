import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "./header";
import Navbar from "./navbar";
import { About } from "./about";
import { Projects } from "./projects";

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <Box maxW="1200px" mx={"auto"} zIndex={1} position={"sticky"} top={0} px={16} bg={"inherit"}>
        <Navbar />
        </Box>
        <Box maxW="1200px" mx="auto" px={16}>
            <Header />
            <About />
            <Projects />
            {children}
        </Box>
        </>
    );
};
