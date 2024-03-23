import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "./header";
import Navbar from "./navbar";

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box maxW="1200px" mx="auto" px={4}>
            <Navbar />
            <Header />
            {children}
        </Box>
    );
};
