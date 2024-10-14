import useCustomStyle from '@/hooks/useCustomStyle';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type TagTextProps = TextProps & {
	children: string;
};

const TagText: FC<TagTextProps> = ({ children, ...props }) => {
	const { colors, fonts } = useCustomStyle();
	return (
		<Text
			border={`1px solid ${colors?.black}`}
			textTransform='uppercase'
			boxShadow={`1px 1px 1px 0px ${colors?.black}`}
			backgroundColor={colors?.white}
			p='2px 8px'
			pt='4px'
			fontSize='.675rem'
			fontFamily={fonts.inter}
			{...props}
		>
			{children}
		</Text>
	);
};

export default TagText;
