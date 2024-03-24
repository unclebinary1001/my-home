import { Box, Button, Heading, Stack, Text, Link } from "@chakra-ui/react";
import { MdEmail, MdPhone } from "react-icons/md";
export const Header = () => {
  return (
    <Box maxW={"32 rem"}>
      <Text mb={8} color={"#6096ba"}>
        Hi, my name is
      </Text>
      <Heading size="3xl" color={"#274c77"} mb={4}>
        Mahlangu Nzunda.
      </Heading>
      <Heading mb={8} color={"#274c77"} size="3xl" lineHeight={1.2}>
        Software Engineer | EdTech Enthusiast
      </Heading>
      <Text mb={8} fontSize={"lg"} maxW={600} align={"left"}>
        Computer Engineering student with a passion for software development and
        a strong desire to learn and grow in the tech industry.
      </Text>
      <Stack direction="row" spacing={4}>
        <Link href="mailto:nzundamahlangu@gmail.co9m">
          <Button leftIcon={<MdEmail />} color={"#274c77"} variant="outline">
            Email
          </Button>
        </Link>
        <Link href="tel:+1-601-345-5760">
          <Button leftIcon={<MdPhone />} color={"#274c77"} variant="outline">
            Call Me
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};
