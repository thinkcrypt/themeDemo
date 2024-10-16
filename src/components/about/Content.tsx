import { Box, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '@/components';

type ContentProps = TextProps & {
	data: {
		label: string;
		paraOne: string;
		paraTwo?: string;
	};
};

const Content: FC<ContentProps> = ({ data, ...props }) => {
	return (
		<Box mb='2rem' {...props}>
			<TextNormal fontSize='2rem' mb='.5rem'>
				{data?.label}
			</TextNormal>
			<TextNormal mb='1rem'>{data?.paraOne}</TextNormal>
			<TextNormal>{data?.paraTwo}</TextNormal>
		</Box>
	);
};

export default Content;
