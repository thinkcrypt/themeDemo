import { ProductType } from '@/lib/types/ProductTypes';
import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import CartHeader from './CartHeader';
import { Column, TextNormal } from '@/components';
import { Price } from '@/components';

type SimpleCartProps = {
	data: ProductType;
};

const SimpleCart: FC<SimpleCartProps> = ({ data }) => {
	return (
		<Box>
			<Box bg='red'>
				<CartHeader imgSrc={data?.imgSrc} />
			</Box>
			<Column alignItems='center' my='12px'>
				<TextNormal mb='8px'>{data?.productName}</TextNormal>
				<Price>{data?.price}</Price>
			</Column>
		</Box>
	);
};

export default SimpleCart;
