import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuList, Flex, Icon, MenuButton, Text } from "@chakra-ui/react";
import { Autour_One } from "next/font/google";
import React from "react";
import { TiHome } from "react-icons/ti";
import Communities from "./Communities";

const Directory: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex align="center">
            <Icon fontSize={24} as={TiHome} mr={{ base: 1, md: 2 }} />
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontSize="10pt">Home</Text>
            </Flex>
          </Flex>
          {/* Maximize space between Flex and Cheveron Down */}
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};

export default Directory;
