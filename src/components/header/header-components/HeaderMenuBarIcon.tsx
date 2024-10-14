import { HeaderIcon } from "@/components";
import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";

type HeaderMenuBarIconProps = {
  handleSearch?: () => void;
  handleBar: () => void;
};

const HeaderMenuBarIcon: FC<HeaderMenuBarIconProps> = ({
  handleSearch,
  handleBar,
}) => {
  return (
    <Flex
      w="full"
      h="full"
      alignItems="center"
      justifyContent="flex-start"
      gap="10px"
    >
      <Box onClick={handleBar}>
        <HeaderIcon name="menu-bar" />
      </Box>
      <Box onClick={handleSearch}>
        <HeaderIcon name="search" />
      </Box>
    </Flex>
  );
};

export default HeaderMenuBarIcon;
