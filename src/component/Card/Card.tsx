/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Icon } from '@/components';
import SpaceBetween from '../SpaceBetween/SpaceBetween';
import Link from 'next/link';
import useCustomFont from '@/hooks/useCustomFont';
import { borderRadius } from '@/lib/config/constants';
import { currency } from '@/lib/config/constants';

const ThemeCard = ({ backendData: backendDemoData }: { backendData: any }) => {
	const { fonts } = useCustomFont();
	return (
		<Box maxW={{ base: 'full', md: '340px' }} overflow={'hidden'}>
			<Link target='_blank' href={`/themes/${backendDemoData?._id}`}>
				<CardWrapper>
					<CardImage backendDemoData={backendDemoData} />
				</CardWrapper>

				<Box className='text-part' mt='18px' fontFamily={fonts?.geistRegular}>
					<Heading
						as='h5'
						fontSize={{ base: '20px', md: '24px' }}
						lineHeight={'20px'}
					>
						{backendDemoData?.name}
					</Heading>

					<Text
						fontSize={{ base: '16px', md: '18px' }}
						fontWeight={'500'}
						mt={{ base: '8px', md: '10px' }}
					>
						<Text as='span' color={'black'} fontSize={'1.3rem'} mr='0.3rem'>
							{currency?.symbol}
						</Text>
						{backendDemoData?.price} BDT
					</Text>
					<SpaceBetween>
						<Text
							fontFamily={fonts?.geistRegular}
							fontSize={'15px'}
							mt='0.5rem'
						>
							{backendDemoData?.developer}
						</Text>
						<IconCircle>
							<Icon name='navigate-page' size={15} />
						</IconCircle>
					</SpaceBetween>
				</Box>
			</Link>
		</Box>
	);
};

export default ThemeCard;

// Hepler compenents

const CardWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<Box
			w='full'
			height={{ base: '240px', md: '385px' }}
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
// const CardHeading = ({ children }: { children: ReactNode }) => {
// 	return (
// 		<Heading
// 			as='h5'
// 			fontSize={{ base: '20px', md: '24px' }}
// 			lineHeight={'20px'}
// 			fontFamily={fonts?.geistBold}
// 		>
// 			{children}
// 		</Heading>
// 	);
// };
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
