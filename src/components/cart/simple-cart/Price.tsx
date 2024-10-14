import useCustomStyle from '@/hooks/useCustomStyle';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type PriceProps = TextProps & {
	children: string | number;
};

const Price: FC<PriceProps> = ({ children, ...props }) => {
	const { fonts } = useCustomStyle();
	return (
		<Text fontFamily={fonts.inter} fontSize='1rem' {...props}>
			৳ {children}
		</Text>
	);
};

export default Price;
