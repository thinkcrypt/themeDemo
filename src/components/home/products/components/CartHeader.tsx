/* eslint-disable @typescript-eslint/no-explicit-any */

import { BoxProps, Flex, Image } from '@chakra-ui/react';

import React, { FC } from 'react';
type CartHeaderProps = BoxProps & {
	imgSrc: string;
};

const CartHeader: FC<CartHeaderProps> = ({ imgSrc, ...props }) => {
	return (
		<Flex w='full' h='18rem' {...props}>
			<Image
				w='full'
				h='full'
				objectFit='cover'
				src={imgSrc}
				alt='Product Image'
			/>
		</Flex>
	);
};

export default CartHeader;
