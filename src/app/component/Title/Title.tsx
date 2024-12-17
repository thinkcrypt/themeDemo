import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { data } from '../../../lib/config/data';
import { colors } from '@/hooks/useCustomStyle';

const Title = () => {
	const { headings } = data;
	return (
		<Flex flexDir={'column'} alignItems={'center'}>
			<Heading fontSize={'4.2rem'} color={colors?.text_primary}>
				{headings?.title}
			</Heading>
			<Text fontSize={'1.4rem'} mt='1.2rem' color={colors?.text_secondary}>
				{headings?.description}
			</Text>
		</Flex>
	);
};

export default Title;
