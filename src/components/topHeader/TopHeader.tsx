'use client';
import { Box, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '../utils';
import useCustomStyles from '@/hooks/useCustomStyle';
type TopHeaderProps = {
	data: {
		textFirst: string;
		textSecond: string;
	};
};

const TopHeader: FC<TopHeaderProps> = ({ data }) => {
	const { colors } = useCustomStyles();

	return (
		<Box
			display={{ base: 'none', lg: 'block' }}
			py='8px'
			w='full'
			h='auto'
			bg={colors.primary}
		>
			<Flex color={colors.white} gap='30px' justifyContent='center'>
				<TextNormal>{data?.textFirst}</TextNormal>|
				<TextNormal>{data?.textSecond}</TextNormal>
			</Flex>
		</Box>
	);
};

export default TopHeader;
