import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { colors } from '@/hooks/useCustomStyle';
import { data } from '@/lib/config/data';
import useCustomFont from '@/hooks/useCustomFont';

const Title = () => {
	const { fonts } = useCustomFont();
	const { headings } = data;
	return (
		<Flex flexDir={'column'} alignItems={'center'} textAlign={'center'}>
			<Heading
				fontFamily={fonts?.geistBold}
				fontWeight={'600'}
				fontSize={{ base: '2.1rem', sm: '2.8rem', md: '3.5rem', lg: '4.2rem' }}
				color={colors?.text_primary}
			>
				{headings?.title}
			</Heading>
			<Text
				fontFamily={fonts?.geistRegular}
				fontWeight={'400'}
				fontSize={{ base: '1rem', sm: '1.4rem' }}
				mt='1.2rem'
				color={colors?.text_secondary}
			>
				{headings?.description}
			</Text>
		</Flex>
	);
};

export default Title;
/*
font size --> 16px , line height --> 20px ==> card heading
font size --> 14px , line height --> 20px ==> card description(mt=8px), card footer (my=14px)
*/
