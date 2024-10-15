/* eslint-disable @typescript-eslint/no-explicit-any */

import { TextNormal } from '@/components';
import { currency } from '@/lib/config/constants';
import { Flex, FlexProps } from '@chakra-ui/react';

import React, { FC } from 'react';
type PriceProps = FlexProps & {
	price?: string | number;
	fontSize?: string;
	color?: string;
};

const Price: FC<PriceProps> = ({ price, fontSize, color, ...props }) => {
	return (
		<Flex fontSize='3rem' justifyContent='center' gap={2} {...props}>
			<TextNormal fontSize={fontSize} color={color}>
				{currency?.symbol}
			</TextNormal>
			<TextNormal fontSize={fontSize} color={color}>
				{price}
			</TextNormal>
			<TextNormal fontSize={fontSize} color={color}>
				{currency?.code}
			</TextNormal>
		</Flex>
	);
};

export default Price;
