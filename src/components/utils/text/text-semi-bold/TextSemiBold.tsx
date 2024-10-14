'use client';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type TextSemiBoldProps = TextProps & {
	children?: string;
};

const TextSemiBold: FC<TextSemiBoldProps> = ({ children, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Text
			fontFamily='inter'
			fontSize='1.75rem'
			fontWeight='500'
			color={colors.white}
			{...props}
		>
			{children}
		</Text>
	);
};

export default TextSemiBold;
