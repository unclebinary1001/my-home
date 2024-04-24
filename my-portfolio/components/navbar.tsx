"use client";

import {
  Flex,
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

function MobileNavMenu() {
  const menu = useDisclosure();

  const breakpoint = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (menu.isOpen && !breakpoint) {
      menu.onClose();
    }
  }, [breakpoint, menu]);

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
        {menu.isOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
      </Center>
      <Drawer isOpen={menu.isOpen} onClose={menu.onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent id="nav-menu" bg="gray.300" padding="6">
          <Stack
            divider={<StackDivider borderColor="whiteAlpha.300" />}
            as="nav"
            aria-label="Main navigation"
            spacing="0"
          >
          

            <Link fontFamily="heading" href="#about">
              <Text>About</Text>
            </Link>
            <Link href="#projects">
              <Text>Projects</Text>
            </Link>
            <Text>Media</Text>
            <Text>Contact</Text>
            <Link href="/resume.pdf">Resume</Link>
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function Navbar() {
  return (
    <>
      <Flex as={"header"} alignItems={"center"} py={4} mb={16}>
        <WrapItem>
          <Avatar
            color={"#ffffff"}
            backgroundColor={"#2F6475"}
            name="Mahlangu Nzunda"
          />
        </WrapItem>
        <Spacer />
        <Link href="#about" display={{ base: "none", md: "block" }}>
          <Text>About</Text>
        </Link>
        <Spacer />
        <Link href="#projects" display={{ base: "none", md: "block" }}>
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
    </>
  );
}
