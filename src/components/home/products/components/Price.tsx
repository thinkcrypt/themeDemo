/* eslint-disable @typescript-eslint/no-explicit-any */

import { TextNormal } from '@/components';
import { currency } from '@/lib/config/data';
import { Flex, FlexProps } from '@chakra-ui/react';

import React, { FC } from 'react';
type PriceProps = FlexProps & {
	price?: string;
};

const Price: FC<PriceProps> = ({ price, ...props }) => {
	return (
		<Flex justifyContent='center' gap={2} {...props}>
			<TextNormal>{currency?.symbol}</TextNormal>
			<TextNormal>{price}</TextNormal>
			<TextNormal>{currency?.code}</TextNormal>
		</Flex>
	);
};

export default Price;
