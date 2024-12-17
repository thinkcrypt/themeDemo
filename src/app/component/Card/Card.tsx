import { Card, CardBody, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { data } from '../../../lib/config/data';
import { Icon } from '@/components';
import { colors } from '@/hooks/useCustomStyle';
import SpaceBetween from '../SpaceBetween/SpaceBetween';
import Link from 'next/link';
const ThemeCard = () => {
	const { backendDemoData } = data;
	return (
		<Link href={backendDemoData?.demoUrl}>
			<Card
				// minH={'450px'}
				maxW='300px'
				mt='2rem'
				variant={'outline'}
				overflow={'hidden'}
			>
				<Image objectFit='cover' src={backendDemoData?.image} alt='Chakra UI' />
				<CardBody>
					<SpaceBetween>
						<Heading as='h5' fontSize={'1.2rem'}>
							{backendDemoData?.name}
						</Heading>
						<Text>${backendDemoData?.price}</Text>
					</SpaceBetween>
					<Text fontSize={'14px'} color={colors?.text_secondary} my='0.5rem'>
						Get started with Next.js and React in seconds.
					</Text>
					{/* <Text></Text> */}
					<SpaceBetween>
						<Text fontSize={'14px'} color={colors?.text_secondary}>
							Developed by - {backendDemoData?.developer}
						</Text>
						<Icon name='navigate-page' size={18} />
					</SpaceBetween>
				</CardBody>
			</Card>
		</Link>
	);
};

export default ThemeCard;
