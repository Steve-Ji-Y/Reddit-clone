import useDirectory from "@/hooks/useDirectory";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuList,
  Flex,
  Icon,
  MenuButton,
  Text,
  Image,
} from "@chakra-ui/react";
import { Autour_One } from "next/font/google";
import React from "react";
import { TiHome } from "react-icons/ti";
import Communities from "./Communities";

const Directory: React.FC = () => {
  const { directoryState, toggleMenuOpen } = useDirectory();

  return (
    <Menu isOpen={directoryState.isOpen}>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
        onClick={toggleMenuOpen}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex align="center">
            {directoryState.selectedMenuItem.imageURL ? (
              <Image
                src={directoryState.selectedMenuItem.imageURL}
                borderRadius="full"
                boxSize="24px"
                mr={2}
                alt=""
              />
            ) : (
              <Icon
                fontSize={24}
                as={directoryState.selectedMenuItem.icon}
                mr={{ base: 1, md: 2 }}
                color={directoryState.selectedMenuItem.iconColor}
              />
            )}

            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontSize="10pt">
                {directoryState.selectedMenuItem?.displayText}
              </Text>
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
