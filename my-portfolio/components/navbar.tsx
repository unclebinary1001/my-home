"use client";

import {
  Flex,
  Box,
  WrapItem,
  Text,
  Spacer,
  Link,
  Avatar,
  useDisclosure,
  useBreakpointValue,
  Center,
  Drawer,
  DrawerContent,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

import { CloseIcon, HamburgerMenuIcon } from "./nav-icons";
import { useEffect } from "react";

const scrollToDiv = (divId: string) => {
  // const div = document.getElementById(divId);

  const navbarHeight = document.querySelector("nav")?.clientHeight || 0;
  const targetDivOffset = document.getElementById(divId)?.offsetTop || 0;

  window.scrollTo({
    top: targetDivOffset - navbarHeight,
    behavior: "smooth",
  });
};

function MobileNavMenu() {
  const menu = useDisclosure();
  const breakpoint = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (menu.isOpen && !breakpoint) {
      menu.onClose();
    }
  }, [breakpoint, menu]);

  const mobileScrollToDiv = (divId: string) => {
    scrollToDiv(divId);

    menu.onClose();
  };

  return (
    <>
      <Center
        width="10"
        height="10"
        display={{ base: "flex", md: "none" }}
        as="button"
        aria-haspopup="true"
        aria-expanded={menu.isOpen}
        aria-controls="nav-menu"
        id="nav-menu--trigger"
        type="button"
        onClick={menu.onOpen}
      >
        {menu.isOpen ? <CloseIcon z={2} /> : <HamburgerMenuIcon />}
      </Center>
      <Drawer
        isOpen={menu.isOpen}
        size={"full"}
        onClose={menu.onClose}
        placement="top"
      >
        <DrawerContent id="nav-menu" bg="rgba(246, 249, 252, 0.95)" backdropFilter="blur(16px)" padding="6" pt={16}>
          <Center
            position="absolute"
            top={6}
            right={6}
            width="10"
            height="10"
            as="button"
            onClick={menu.onClose}
          >
            <CloseIcon z={2} />
          </Center>
          <Stack
            divider={<StackDivider borderColor="rgba(10,37,64,0.1)" />}
            as="nav"
            aria-label="Main navigation"
            spacing="0"
            mt={8}
          >
            <Link padding="4" onClick={() => mobileScrollToDiv("about")} _hover={{ textDecoration: "none", bg: "rgba(0,0,0,0.02)" }}>
              <Text fontSize="xl" fontWeight="600" color="#0A2540">About</Text>
            </Link>
            <Link padding="4" onClick={() => mobileScrollToDiv("projects")} _hover={{ textDecoration: "none", bg: "rgba(0,0,0,0.02)" }}>
              <Text fontSize="xl" fontWeight="600" color="#0A2540">Projects</Text>
            </Link>
            <Link padding="4" href="/resume.pdf" onClick={() => menu.onClose()} _hover={{ textDecoration: "none", bg: "rgba(0,0,0,0.02)" }}>
              <Text fontSize="xl" fontWeight="600" color="#0A2540">Resume</Text>
            </Link>
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function Navbar() {
  return (
    <Box as={"nav"} id="navbar">
      <Flex alignItems={"center"} py={4}>
        <a href="/" style={{ textDecoration: "none" }}>
          <WrapItem display="flex" alignItems="center">
            <Box w="30px" h="30px" border="1.5px solid #000" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
              <Text color="#000" fontWeight="900" fontSize="lg" lineHeight="1">M</Text>
            </Box>
            <Text ml={3} fontWeight="700" color="#000000" display={{ base: "none", md: "block" }}>
              Mahlangu
            </Text>
          </WrapItem>
        </a>
        <Spacer />
        <Flex flexDirection={"row"} gap={8}>
          <Link
            onClick={() => scrollToDiv("about")}
            display={{ base: "none", md: "block" }}
            fontWeight="500"
            color="#000000"
            _hover={{ textDecoration: "underline" }}
          >
            <Text>About</Text>
          </Link>
          <Link
            onClick={() => scrollToDiv("projects")}
            display={{ base: "none", md: "block" }}
            fontWeight="500"
            color="#000000"
            _hover={{ textDecoration: "underline" }}
          >
            <Text>Projects</Text>
          </Link>
          <Link
            href="/resume.pdf"
            display={{ base: "none", md: "block" }}
            fontWeight="500"
            color="#000000"
            _hover={{ textDecoration: "underline" }}
          >
            Resume
          </Link>
        </Flex>
        <MobileNavMenu />
      </Flex>
    </Box>
  );
}
