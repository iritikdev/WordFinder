import React, { useState } from "react";
import {
  Stack,
  Menu,
  MenuButton,
  MenuList,
  Portal,
  MenuItem,
  Switch,
  useColorMode,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
import { IoMdMoon } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import logo from "../assets/logo.svg";

function Navbar(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      py={3}
      mt={10}
      mb={5}
    >
      <img src={logo} alt={"Dictionary logo"} width={28} />
      <Stack direction="row">
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FiChevronDown />}
            variant={"link"}
          >
            fonts
          </MenuButton>
          <Portal>
            <MenuList>
              <MenuItem>Sans Serif</MenuItem>
              <MenuItem>Mono</MenuItem>
              <MenuItem>Serif</MenuItem>
            </MenuList>
          </Portal>
        </Menu>
        <Switch
          colorScheme="purple"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <IoMdMoon size={22} />
      </Stack>
    </Stack>
  );
}

export default Navbar;
