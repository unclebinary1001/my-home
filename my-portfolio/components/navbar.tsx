import { Flex, WrapItem, Text, Spacer, Link } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
type Props = {};

export default function Navbar({}: Props) {
  return (
    <Flex alignItems={"center"} py={4} mb={16}>
      <WrapItem>
        <Avatar
          color={"#e7ecef"}
          backgroundColor={"#274c77"}
          name="Mahlangu Nzunda"
        />
      </WrapItem>
      <Spacer />
      <Text>About</Text>
      <Spacer />
      <Text>Projects</Text>
      <Spacer />
      <Text>Media</Text>
      <Spacer />
      <Text>Contact</Text>
      <Spacer />
      <Link href="/resume.pdf">
        Resume
    </Link>
    </Flex>
  );
}
