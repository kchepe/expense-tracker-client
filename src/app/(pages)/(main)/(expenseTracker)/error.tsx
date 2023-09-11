"use client";
import Box from "@/app/common/Box";
import Button from "@/app/common/Button";
import Text from "@/app/common/Text";

import { useEffect } from "react";

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box className="flex flex-col gap-5 w-full items-center py-24">
      <Text variant="h2" className="text-center">
        Something went wrong!
      </Text>
      <Button onClick={() => window.location.reload()} color="primary">
        Try again
      </Button>
    </Box>
  );
};

export default Error;
