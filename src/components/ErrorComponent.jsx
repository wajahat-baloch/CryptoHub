import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Alert
      status="error"
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      maxW="container.lg"
      textAlign="center"
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default ErrorComponent;
