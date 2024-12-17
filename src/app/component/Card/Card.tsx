import { Card, CardBody, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { data } from '../../../lib/config/data';
import { Icon } from '@/components';
import { colors } from '@/hooks/useCustomStyle';
const ThemeCard = () => {
	const { backendDemoData } = data;
	return (
		<Card maxW='sm' mt='2rem' variant={'outline'} overflow={'hidden'}>
			<Image objectFit='cover' src={backendDemoData?.image} alt='Chakra UI' />
			<CardBody>
				<Heading as='h5' fontSize={'1.2rem'}>
					Next.js Boilerplate
				</Heading>
				<Text fontSize={'14px'} color={colors?.text_secondary} my='0.5rem'>
					Get started with Next.js and React in seconds.
				</Text>
				{/* <Text></Text> */}
				<Flex alignItems={'center'}>
					<Text fontSize={'14px'} color={colors?.text_secondary}>
						Developed by - {backendDemoData?.developer}
					</Text>
					<Icon name='navigate-page' size={18} />
				</Flex>
			</CardBody>
		</Card>
	);
};

export default ThemeCard;
