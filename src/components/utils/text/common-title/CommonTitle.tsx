import useCustomStyle from '@/hooks/useCustomStyle';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CommonTitleProps = TextProps & {
	children: string;
};

const CommonTitle: FC<CommonTitleProps> = ({ children, ...props }) => {
	const { fonts } = useCustomStyle();

	return (
		<Text
			fontFamily={fonts.marcellus}
			fontStyle='normal'
			fontWeight='500'
			fontSize='3.5rem'
			lineHeight='2.35rem'
			{...props}
		>
			{children}
		</Text>
	);
};

export default CommonTitle;