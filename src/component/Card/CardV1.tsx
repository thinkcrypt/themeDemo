// import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
// import React from 'react';
// import { Icon } from '@/components';
// import { colors } from '@/hooks/useCustomStyle';
// import SpaceBetween from '../SpaceBetween/SpaceBetween';
// import Link from 'next/link';
// import { data } from '@/lib/config/data';
// import useCustomFont from '@/hooks/useCustomFont';
// const ThemeCard = () => {
// 	const { fonts } = useCustomFont();
// 	const { backendDemoData } = data;
// 	return (
// 		<Link href={backendDemoData?.demoUrl}>
// 			<Card
// 				// minH={'450px'}
// 				maxW='300px'
// 				variant={'outline'}
// 				overflow={'hidden'}
// 			>
// 				<Image objectFit='cover' src={backendDemoData?.image} alt='Chakra UI' />
// 				<CardBody>
// 					<SpaceBetween>
// 						<Heading
// 							as='h5'
// 							fontSize={'16px'}
// 							lineHeight={'20px'}
// 							fontFamily={fonts?.openSans}
// 						>
// 							{backendDemoData?.name}
// 						</Heading>
// 					</SpaceBetween>
// 					<SpaceBetween>
// 						<Heading
// 							as='h5'
// 							fontSize={'16px'}
// 							lineHeight={'20px'}
// 							mt='0.5rem'
// 							color={colors?.text_secondary}
// 							fontFamily={fonts?.openSans}
// 						>
// 							Price
// 						</Heading>
// 						<Text
// 							fontSize={'14px'}
// 							fontWeight={'600'}
// 							color={colors?.text_secondary}
// 						>
// 							${backendDemoData?.price}
// 						</Text>
// 					</SpaceBetween>

// 					<Text fontSize={'14px'} color={colors?.text_secondary} mt='8px'>
// 						Get started with Next.js and React in seconds.
// 					</Text>
// 					{/* <Text></Text> */}
// 					<SpaceBetween>
// 						<Text fontSize={'14px'} color={colors?.text_secondary} my='14px'>
// 							Developed by - {backendDemoData?.developer}
// 						</Text>
// 						<Icon name='navigate-page' size={18} />
// 					</SpaceBetween>
// 				</CardBody>
// 			</Card>
// 		</Link>
// 	);
// };

// export default ThemeCard;
