import { Icon } from '@/components/icon';
import { IconButton } from '@/components/utils';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type AddToCartProps = FlexProps & {};

const AddToCart: FC<AddToCartProps> = ({ ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Box w='full' h='full' {...props}>
			<IconButton
				w='full'
				h='full'
				leftIcon={<Icon color={colors?.white} name='cart' />}
			>
				Add To Cart
			</IconButton>
		</Box>
	);
};

export default AddToCart;
