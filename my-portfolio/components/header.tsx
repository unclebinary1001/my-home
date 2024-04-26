import { Box, Button, Heading, Stack, Text, Link, Flex, Center } from "@chakra-ui/react";
import { MdEmail, MdPhone } from "react-icons/md";

export const Header = () => {
  return (
    <Box maxW={"32 rem"} h={'100vh'} paddingTop={{base:'10vh', md:'20vh'}}>
      <Text mb={8} color={"#2F6475"}>
        Hi, my name is
      </Text>
      <Heading size="3xl" color={"#2f374e"} mb={4}>
        Mahlangu Nzunda.
      </Heading>
      <Heading mb={8} color={"#2F6475"} size="3xl" lineHeight={1.2}>
        Software Engineer 👨🏿‍💻| Shipper
      </Heading>
      <Text mb={8} fontSize={"lg"} maxW={600} color={"#2f374e"} align={"left"}>
        Computer Engineering student with a passion for software development and
        a strong desire to learn and grow in the tech industry.
      </Text>
      <Stack direction="row" spacing={4}>
        <Link href="mailto:nzundamahlangu@gmail.com">
          <Button leftIcon={<MdEmail />} color={"#2F6475"} variant="outline">
            Email
          </Button>
        </Link>
        <Link href="tel:+1-601-345-5760">
          <Button leftIcon={<MdPhone />} color={"#2F6475"} variant="outline">
            Call Me
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};
