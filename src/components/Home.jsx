import { Box, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";
import bgImg from "../image/b.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box
      bgColor={"black"}
      w={"full"}
      h={"auto"}
      minHeight={["75vh", "90vh"]}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <motion.div
        style={{
          height: "60vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: "2",
          repeat: "infinity",
          repeatType: "reverse",
        }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          minHeight="53vh" // You can adjust the height as needed
        >
          <Image
            style={{
              width: "80%",
              maxHeight: "50vh", // Adjust this value as needed
              objectFit: "contain",
            }}
            src={bgImg}
            alt="Centered Image"
          />
        </Flex>
      </motion.div>

      <Text
        fontSize={["5xl", "7xl", "8xl"]} // Responsive font size
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
      >
        CryptoHUB
      </Text>
    </Box>
  );
};

export default Home;
