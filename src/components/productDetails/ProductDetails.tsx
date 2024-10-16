/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps, Grid, GridItem } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

import useCustomStyle from '@/hooks/useCustomStyle';
import { TextNormal } from '@/components';
import ProductAccordion from './components/ProductAccordion';
import Quanity from './components/Quantity';
import LeftPart from './components/LeftPart';
import ProductInfo from './components/ProductInfo';
import AddToCart from './components/AddToCart';
import WishList from './components/Wishlist';

type ProductDetailsProps = BoxProps & {
	data: any;
};

const ProductDetails: FC<ProductDetailsProps> = ({ data, ...props }) => {
	const [quantity, setQuantity] = useState(1);
	const { colors } = useCustomStyle();

	const handleQuantity = (type: string) => {
		if (type == 'increment') {
			setQuantity(quantity + 1);
			return;
		}
		if (type == 'decrement') {
			if (quantity <= 1) {
				return;
			} else {
				setQuantity(quantity - 1);
				return;
			}
		}
	};

	return (
		<Box py='6rem' borderBottom={`1px solid ${colors?.primary}`} {...props}>
			<Grid templateColumns='repeat(2, 1fr)' gap={6}>
				<GridItem w='100%' h='auto'>
					<LeftPart imgSrc={data?.imgSrc} />
				</GridItem>
				<GridItem w='100%' h='auto'>
					<Box>
						<ProductInfo data={data} />
						<Box py='1.5rem'>
							<TextNormal mb='12px'>Quantity</TextNormal>
							<Grid templateColumns='repeat(8, 1fr)' gap={6}>
								<GridItem colSpan={{ base: 2, md: 1 }} w='100%' h='3rem'>
									<Quanity
										quantity={quantity}
										handleQuantity={handleQuantity}
									/>
								</GridItem>
								<GridItem colSpan={{ base: 5, md: 5 }} w='100%' h='3rem'>
									<AddToCart />
								</GridItem>
								<GridItem colSpan={{ base: 1, md: 1 }} w='100%'>
									<WishList />
								</GridItem>
							</Grid>
						</Box>
						<Box>
							<ProductAccordion />
						</Box>
					</Box>
				</GridItem>
			</Grid>
		</Box>
	);
};

export default ProductDetails;
