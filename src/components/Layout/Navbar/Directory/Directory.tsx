import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuList, Flex, Icon, MenuButton, Text } from "@chakra-ui/react";
import React from "react";
import { TiHome } from "react-icons/ti";

const Directory: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex align="center">
          <Flex align="center">
            <Icon fontSize={24} as={TiHome} mr={{ base: 1, md: 2 }} />
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text>Home</Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList></MenuList>
    </Menu>
  );
};

export default Directory;
