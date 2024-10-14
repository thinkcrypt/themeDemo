import { HeaderIcon } from "@/components";
import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { FC } from "react";

type IconContainerProps = FlexProps & {
  handleSearch?: () => void;
  handleUser?: () => void;
  handleWishlist?: () => void;
  handleCart?: () => void;
};

const IconContainer: FC<IconContainerProps> = ({
  handleCart,
  handleSearch,
  handleUser,
  handleWishlist,
  ...props
}) => {
  return (
    <Flex
      w="full"
      h="full"
      justifyContent="flex-end"
      alignItems="center"
      gap={3}
      {...props}
    >
      <Box onClick={handleSearch}>
        <HeaderIcon name="search" />
      </Box>
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

export default IconContainer;
