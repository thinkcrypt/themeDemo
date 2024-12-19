/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Icon } from '@/components';
import SpaceBetween from '../SpaceBetween/SpaceBetween';
import Link from 'next/link';
import useCustomFont from '@/hooks/useCustomFont';
import { borderRadius } from '@/lib/config/constants';
import { currency } from '@/lib/config/constants';

//////////////////////// STYLES
const cardBodyTextWrapperStyle = {
	fontSize: { base: '16px', md: '18px' },
	fontWeight: '500',
	mt: { base: '8px', md: '10px' },
};
const cardBodyyHeadingStyle = {
	fontSize: { base: '20px', md: '24px' },
	lineHeight: '20px',
};

const ThemeCard = ({ backendData: backendDemoData }: { backendData: any }) => {
	const { fonts } = useCustomFont();
	return (
		<ThemeWrapper>
			<Link target='_blank' href={`/themes/${backendDemoData?._id}`}>
				<CardWrapper>
					<CardImage backendDemoData={backendDemoData} />
				</CardWrapper>

				<CardBody font={fonts?.geistRegular}>
					<Heading as='h5' {...cardBodyyHeadingStyle}>
						{backendDemoData?.name}
					</Heading>

					<Text {...cardBodyTextWrapperStyle}>
						<Text as='span' color={'black'} fontSize={'1.3rem'} mr='0.3rem'>
							{currency?.symbol}
						</Text>
						{backendDemoData?.price} BDT
					</Text>
					<SpaceBetween>
						<Text fontSize={'15px'}>{backendDemoData?.developer}</Text>
						<IconCircle>
							<Icon name='navigate-page' size={15} />
						</IconCircle>
					</SpaceBetween>
				</CardBody>
			</Link>
		</ThemeWrapper>
	);
};

export default ThemeCard;

// HELPER COMPONENTS

const CardBody = ({
	children,
	font,
}: {
	children: ReactNode;
	font: string;
}) => {
	return (
		<Box mt='18px' fontFamily={font}>
			{children}
		</Box>
	);
};
const ThemeWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<Box maxW={{ base: 'full', md: '340px' }} overflow={'hidden'}>
			{children}
		</Box>
	);
};

const CardWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<Box
			w='full'
			height={{ base: '240px', md: '315px' }}
			overflow={'hidden'}
			borderRadius={borderRadius?.sm}
			border='1px solid #d6d3d1'
		>
			{children}
		</Box>
	);
};
const IconCircle = ({ children }: { children: ReactNode }) => {
	return (
		<Text
			as='span'
			mr='1rem'
			bg='gray.100'
			w='30px'
			h='30px'
			rounded='full'
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
		>
			{children}
		</Text>
	);
};

const CardImage = ({ backendDemoData }: { backendDemoData: any }) => {
	return (
		<Image
			w='full'
			h='full'
			objectFit='cover'
			src={backendDemoData?.image}
			alt='theme image'
			transition={'all 0.3s ease-in-out'}
			_hover={{ transform: 'scale(1.03)' }}
		/>
	);
};
