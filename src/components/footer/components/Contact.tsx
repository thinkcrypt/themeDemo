import { TextNormal, Icon } from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, BoxProps, Flex } from '@chakra-ui/react';

import React, { FC } from 'react';

type ContactProps = BoxProps & {
	data: {
		label: string;
		address: string;
		phone: string;
		mail: string;
	};
};

const Contact: FC<ContactProps> = ({ data, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Box color={colors?.white} {...props}>
			<TextNormal
				mb='1rem'
				fontWeight='600'
				fontSize='2rem'
				color={colors?.white}
			>
				{data?.label}
			</TextNormal>
			<Flex mb={3} alignItems='center' gap={2}>
				<Icon color={colors?.white} size={16} name='map' />
				<TextNormal color={colors?.lightWhite}>{data?.address}</TextNormal>
			</Flex>
			<Flex mb={3} alignItems='center' gap={2}>
				<Icon color={colors?.white} size={16} name='phone' />
				<TextNormal color={colors?.lightWhite}>{data?.phone}</TextNormal>
			</Flex>
			<Flex mb={3} alignItems='center' gap={2}>
				<Icon color={colors?.white} size={16} name='envelope' />
				<TextNormal color={colors?.lightWhite}>{data?.mail}</TextNormal>
			</Flex>
		</Box>
	);
};

export default Contact;
