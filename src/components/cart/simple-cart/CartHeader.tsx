import { Flex, Image, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CartHeaderProps = TextProps & {
	imgSrc: string;
};

const CartHeader: FC<CartHeaderProps> = ({ imgSrc }) => {
	return (
		<Flex w='100%' maxW='350px' h='auto' maxH='22rem'>
			<Image
				w='100%'
				h='auto'
				objectFit='cover'
				src={imgSrc}
				alt='Product Image'
			/>
		</Flex>
	);
};

export default CartHeader;
