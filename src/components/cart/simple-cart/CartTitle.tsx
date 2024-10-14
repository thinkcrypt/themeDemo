import useCustomStyles from '@/hooks/useCustomStyle';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CartTitleProps = TextProps & {
	children: string;
};

const CartTitle: FC<CartTitleProps> = ({ children, ...props }) => {
	const { fonts } = useCustomStyles();
	return (
		<Text
			fontFamily={fonts.inter}
			fontStyle='normal'
			fontWeight='500'
			lineHeight='24px'
			fontSize='18px'
			{...props}
		>
			{children}
		</Text>
	);
};

export default CartTitle;
