import { Box, BoxProps, Center } from '@chakra-ui/react';
import React, { FC } from 'react';
import CartHeader from './CartHeader';
import CartBody from './CartBody';
import CartButton from './CartButton';
import Link from 'next/link';
type ProductCartProps = BoxProps & {
	data: {
		imgSrc: string;
		productName: string;
		price: string;
		rating: number;
	};
};

const ProductCart: FC<ProductCartProps> = ({ data, ...props }) => {
	return (
		<Box w='full' {...props}>
			<CartHeader imgSrc={data?.imgSrc} />
			<Link href='/products/1'>
				<CartBody data={data} />
			</Link>
			<Center mt='auto' p='.8rem'>
				<CartButton>Add to Cart</CartButton>
			</Center>
		</Box>
	);
};

export default ProductCart;
