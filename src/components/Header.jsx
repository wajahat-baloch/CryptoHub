import { Box, Button, Flex, Text, chakra } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HoverButton = chakra(Button, {
  baseStyle: {
    _hover: {
      textDecoration: "none", // Change the background color on hover
      borderBottom: "2px solid green", // Change the text color on hover
    },
  },
});

const HoverLink = chakra(Link, {
  baseStyle: {
    _hover: {
      textDecoration: "underline", // Add underline on hover
    },
  },
});

const Header = () => {
  return (
    <Box bg="blackAlpha.900" p={4}>
      <Flex
        justify="space-between"
        align="center"
        maxWidth="1200px" // Adjust the max width as needed
        marginX="auto"
      >
        <Box>
          <HoverLink
            to={"/"}
            style={{ color: "white", textDecoration: "none" }}
          >
            <Text fontSize="xl" fontWeight="bold">
              CryptoHUB
            </Text>
          </HoverLink>
        </Box>
        <Box>
          <HoverLink to={"/"} style={{ textDecoration: "none" }}>
            <HoverButton variant={"unstyled"} color={"white"} mr={3}>
              Home
            </HoverButton>
          </HoverLink>
          <HoverLink to={"/exchanges"} style={{ textDecoration: "none" }}>
            <HoverButton variant={"unstyled"} color={"white"} mr={3}>
              Exchanges
            </HoverButton>
          </HoverLink>
          <HoverLink to={"/coins"} style={{ textDecoration: "none" }}>
            <HoverButton variant={"unstyled"} color={"white"}>
              Coins
            </HoverButton>
          </HoverLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
