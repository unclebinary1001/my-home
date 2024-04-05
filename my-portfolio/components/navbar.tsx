import { Flex, WrapItem, Text, Spacer, Link } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
type Props = {};

export default function Navbar({}: Props) {
  return (
    <Flex as={"header"} alignItems={"center"} py={4} mb={16}>
      <WrapItem>
        <Avatar
          color={"#ffffff"}
          backgroundColor={"#2F6475"}
          name="Mahlangu Nzunda"
        />
      </WrapItem>
      <Spacer />
      <Link href="#about">
        <Text>About</Text>
      </Link>
      <Spacer />
      <Text>Projects</Text>
      <Spacer />
      <Text>Media</Text>
      <Spacer />
      <Text>Contact</Text>
      <Spacer />
      <Link href="/resume.pdf">Resume</Link>
    </Flex>
  );
}
