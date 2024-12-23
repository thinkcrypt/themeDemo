/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import CustomSkeleton from '@/component/Skeleton/Skeleton';
import { PageLayout, SectionPadding } from '@/components';
import { fonts } from '@/hooks/useCustomFont';
import { colors } from '@/hooks/useCustomStyle';
import { useGetByIdQuery } from '@/store/services/commonApi';
import {
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { ReactNode } from 'react';

const ThemeDetails = () => {
	const { id } = useParams();
	const { data, isLoading } = useGetByIdQuery({ path: 'themes', id });
	const relatedImgs =
		isLoading && !data ? (
			<CustomSkeleton />
		) : data?.images.length > 0 ? (
			<RelatedImages images={data} />
		) : (
			<Text>No Related Images</Text>
		);

	// console.log('dynamic id data', data);
	///////////////////// UI COMPONENTS
	const isThemeIntro = isLoading ? (
		<CustomSkeleton />
	) : (
		<ThemeIntro data={data} />
	);

	const isThemeFeatures = isLoading ? (
		<CustomSkeleton />
	) : (
		<ThemeFeatureDescription data={data} />
	);

	return (
		<PageLayout>
			<SectionWrapper>
				<ThemeLayout>
					{isThemeIntro}
					<DeviderLine />
					{isThemeFeatures}
				</ThemeLayout>
			</SectionWrapper>

			<Box bg={colors?.themepage_bg} py='5rem' fontFamily={fonts?.geistRegular}>
				<SectionWrapper>
					<Heading fontSize={'1.8rem'} fontFamily={fonts?.geistBold}>
						Related Themes
					</Heading>
					<Box h='350px' overflow={'hidden'}>
						{relatedImgs}
					</Box>
				</SectionWrapper>
			</Box>
		</PageLayout>
	);
};

export default ThemeDetails;

//////////////// HELPER COMPONENTS.

const RelatedImages = (data: any) => {
	// console.log('images', data);
	return (
		<Grid gridTemplateColumns={'1fr 1fr 1fr'} mt='1rem' gap='20px'>
			{data?.images?.images?.map((item: any, i: number) => (
				<Link href={`demo-dummy`} key={i}>
					<Image
						key={i}
						src={item}
						borderRadius={'6px'}
						alt={'related images'}
						width={'100%'}
						height={'100%'}
						objectFit={'cover'}
					/>
				</Link>
			))}
		</Grid>
	);
};

const ThemeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<Grid
			gridTemplateColumns={{ base: '1fr', md: '40% 1px 60%' }}
			mt='3rem'
			gap={{ base: '6px', lg: '20px' }}
		>
			{children}
		</Grid>
	);
};

const SectionWrapper = ({ children }: { children: ReactNode }) => {
	return <SectionPadding>{children}</SectionPadding>;
};

const ThemeIntro = ({ data }: { data: any }) => {
	return (
		<Box
			position={{ base: 'relative', md: 'sticky' }}
			height={{ base: '100%', md: 'min-content' }}
			top={{ base: '-1.3rem', md: '8rem' }}
			pb='2rem'
		>
			<ThemeHeading>{data?.title}</ThemeHeading>
			<Text mt='1.8rem' color={colors?.text_secondary}>
				{data?.description}
			</Text>
			<ViewDemoBtn>
				<Link target={'_blank'} href={data?.demoUrl ? data?.demoUrl : ''}>
					View Demo
				</Link>
			</ViewDemoBtn>
			<Box mt='1.5rem' fontFamily={fonts?.geistRegular}>
				<ThemeSpaceBetween>
					<ThemeTechText>Framework</ThemeTechText>
					<ThemeTechTextSecondary>{data?.framework}</ThemeTechTextSecondary>
				</ThemeSpaceBetween>
				<ThemeSpaceBetween>
					<ThemeTechText>Use Case</ThemeTechText>
					<ThemeTechTextSecondary>{data?.useCase}</ThemeTechTextSecondary>
				</ThemeSpaceBetween>
				<ThemeSpaceBetween>
					<ThemeTechText>Css</ThemeTechText>
					<ThemeTechTextSecondary>{data?.css}</ThemeTechTextSecondary>
				</ThemeSpaceBetween>
			</Box>
		</Box>
	);
};

const ThemeFeatureDescription = ({ data }: { data: any }) => {
	return (
		<ThemeFeatureWrapper>
			<ThemeFeatureImgWrapper>
				<Image
					w='full'
					h='full'
					objectFit={'cover'}
					src={data?.image}
					alt='Hero Image'
				/>
			</ThemeFeatureImgWrapper>
			<Box mt='4rem' pb='2rem'>
				<Heading fontSize={'1.8rem'} fontFamily={fonts?.geistBold}>
					Theme Features
				</Heading>
				<Text
					mt='1rem'
					color={colors?.text_secondary}
					fontFamily={fonts?.geistRegular}
					lineHeight={'30px'}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
					veritatis?
				</Text>
			</Box>
		</ThemeFeatureWrapper>
	);
};

const DeviderLine = () => {
	return (
		<Box
			bg='gray.100'
			// display={{ base: 'none', md: 'block' }}
			w={{ base: '0', md: '1px' }} // Visible only on md+ devices
			h={{ base: '0', md: '100vh' }}
			mx='auto'
			position={'sticky'}
			// height={'100vh'}
			top='0'
		></Box>
	);
};
const ThemeHeading = ({ children }: { children: ReactNode }) => {
	return (
		<Heading
			as='h3'
			fontSize={'48px'}
			fontFamily={fonts?.geistBold}
			width={'18rem'}
			lineHeight={'52px'}
		>
			{children}
		</Heading>
	);
};
const ThemeTechText = ({ children }: { children: ReactNode }) => {
	return (
		<Text fontSize='14px' fontWeight={'600'} color={colors?.textColor}>
			{children}
		</Text>
	);
};
const ThemeTechTextSecondary = ({ children }: { children: ReactNode }) => {
	return (
		<Text fontSize='14px' color={colors?.textColor}>
			{children}
		</Text>
	);
};

const ThemeSpaceBetween = ({ children }: { children: ReactNode }) => {
	return (
		<Flex
			alignItems={'center'}
			justifyContent={'space-between'}
			borderBottom={'1px solid'}
			borderColor={'gray.100'}
			py='0.5rem'
		>
			{children}
		</Flex>
	);
};
const ViewDemoBtn = ({ children }: { children: ReactNode }) => {
	return (
		<Button
			w=''
			mt='1rem'
			fontSize={'1.1rem'}
			color={colors?.text_primary}
			letterSpacing={'1px'}
			fontWeight={'600'}
			fontFamily={fonts?.geistRegular}
		>
			{children}
		</Button>
	);
};

const ThemeFeatureWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<Box
			overflowY={{ base: 'auto', md: 'scroll' }}
			sx={{
				'::-webkit-scrollbar': {
					display: 'none',
				},
				'-ms-overflow-style': 'none',
				'scrollbar-width': 'none',
			}}
		>
			{children}
		</Box>
	);
};
const ThemeFeatureImgWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<Box
			height={{ base: '25rem' }}
			boxShadow={'0 8px 30px rgba(0, 0, 0, 0.10)'}
			borderRadius={'6px'}
			bg='white'
			width={{ base: '100%', md: '97%', lg: '90%', xl: '95%' }}
			overflow={'hidden'}
		>
			{children}
		</Box>
	);
};
