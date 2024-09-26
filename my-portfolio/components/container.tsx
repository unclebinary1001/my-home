import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "./header";
import Navbar from "./navbar";
import { About } from "./about";
import { Projects } from "./projects";
import { Footer } from "./footer";

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <Box maxW="1200px" mx={"auto"} zIndex={1} position={"sticky"} top={0} px={8} bg={"inherit"}>
        <Navbar />
        </Box>
        <Box maxW="1200px" mx="auto" px={8}>
            <Header />
            <About />
            <Projects />
            <Footer />
            {children}
        </Box>
        </>
    );
};
