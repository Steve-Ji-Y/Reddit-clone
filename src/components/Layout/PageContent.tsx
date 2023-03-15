import React, { PropsWithChildren } from "react";
import { Box, Flex } from "@chakra-ui/react";

interface PageContentLayoutProps {
  maxWidth?: string;
}

// Assumes array of two children are passed
// Creating re-usable layout page content component and pass children to it as we want

const PageContentLayout: React.FC<
  PropsWithChildren<PageContentLayoutProps>
> = ({ children, maxWidth }) => {
  return (
    <Flex justify="center" p="16px 0px">
      <Flex width="95%" justify="center" maxWidth={maxWidth || "860px"}>
        {/* Left Content */}
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
        >
          {children && children[0 as keyof typeof children]}
        </Flex>

        {/* Right Content */}
        <Box
          display={{ base: "none", md: "flex" }}
          flexDirection="column"
          flexGrow={1}
        >
          {children && children[1 as keyof typeof children]}
        </Box>
      </Flex>
    </Flex>
  );
};

export default PageContentLayout;
