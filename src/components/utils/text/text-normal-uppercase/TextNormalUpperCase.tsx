'use client';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type TextNormalUpperCaseProps = TextProps & {
	children: string;
};

const TextNormalUpperCase: FC<TextNormalUpperCaseProps> = ({
	children,
	...props
}) => {
	const { colors } = useCustomStyle();
	return (
		<Text
			fontFamily='inter'
			fontSize='1rem'
			fontWeight='400'
			color={colors.white}
			textTransform='uppercase'
			{...props}
		>
			{children}
		</Text>
	);
};

export default TextNormalUpperCase;
