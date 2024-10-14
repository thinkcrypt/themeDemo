import { HeaderIcon } from "@/components";
import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";

type HeaderMobileIconProps = {
  handleUser?: () => void;
  handleWishlist?: () => void;
  handleCart?: () => void;
};

const HeaderMobileIcon: FC<HeaderMobileIconProps> = ({
  handleCart,
  handleUser,
  handleWishlist,
}) => {
  return (
    <Flex
      w="full"
      h="full"
      justifyContent="flex-end"
      alignItems="center"
      gap={3}
    >
      <Box onClick={handleUser}>
        <HeaderIcon name="fi-user" />
      </Box>
      <Box onClick={handleWishlist}>
        <HeaderIcon name="wishlist" />
      </Box>
      <Box onClick={handleCart}>
        <HeaderIcon name="lu-bag" />
      </Box>
    </Flex>
  );
};

export default HeaderMobileIcon;
