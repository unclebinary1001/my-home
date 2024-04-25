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
  DrawerOverlay,
  DrawerContent,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

import { CloseIcon, HamburgerMenuIcon } from "./nav-icons";
import { useEffect } from "react";


const scrollToDiv = (divId: string) => {
  // const div = document.getElementById(divId);

  const navbarHeight = document.querySelector('nav')?.clientHeight || 0;
  const targetDivOffset = document.getElementById(divId)?.offsetTop || 0;

  window.scrollTo({
    top: targetDivOffset - navbarHeight,
    behavior: 'smooth'
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
        {menu.isOpen ? <CloseIcon z={2}/> : <HamburgerMenuIcon />}
      </Center>
      <Drawer isOpen={menu.isOpen} size={'xl'} onClose={menu.onClose} placement="bottom">
        {/* <DrawerOverlay /> */}
        <DrawerContent id="nav-menu" bg="gray.300" padding="6">
          <Stack
            divider={<StackDivider borderColor="whiteAlpha.600" />}
            as="nav"
            aria-label="Main navigation"
            spacing="0"
          >
            <Link padding="3" onClick={() => mobileScrollToDiv("about")}>
              <Text>About</Text>
            </Link>
            <Link padding="3" onClick={() => mobileScrollToDiv("projects")}>
              <Text>Projects</Text>
            </Link>
            <Text padding="3">Media</Text>
            <Text padding="3">Contact</Text>
            <Link padding="3" href="/resume.pdf" onClick={ () => menu.onClose()}>
              Resume
            </Link>
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function Navbar() {
  

  return (
    <Box as={"nav"} id="navbar" >
      <Flex alignItems={"center"} py={4} >
        <a href="/" style={{textDecoration: 'none'}}>
        <WrapItem>
          <Avatar
            color={"#ffffff"}
            backgroundColor={"#2F6475"}
            name="Mahlangu Nzunda"
          />
        </WrapItem>
        </a>
        <Spacer />
        <Link  onClick={() =>  scrollToDiv('about')} display={{ base: "none", md: "block" }}>
          <Text>About</Text>
        </Link>
        <Spacer />
        <Link onClick={() =>  scrollToDiv('projects')}  display={{ base: "none", md: "block" }}>
          <Text>Projects</Text>
        </Link>
        <Spacer />
        <Text display={{ base: "none", md: "block" }}>Media</Text>
        <Spacer />
        <Text display={{ base: "none", md: "block" }}>Contact</Text>
        <Spacer />
        <Link href="/resume.pdf" display={{ base: "none", md: "block" }}>
          Resume
        </Link>
        <MobileNavMenu />
      </Flex>
    </Box>
  );
}
