import React, { FC } from 'react';

import { Flex, Image } from '@chakra-ui/react';
import { TextBold, TextNormal } from '@/components';

type ServiceCartProps = {
	data: {
		imgSrc: string;
		title: string;
		text: string;
	};
};

const ServiceCart: FC<ServiceCartProps> = ({ data }) => {
	return (
		<Flex w='full' h='full' alignItems='center' p='1rem'>
			<Flex w='100px' h='100px' mr='12px'>
				<Image w='full' h='full' src={data?.imgSrc} alt='Logo Image' />
			</Flex>
			<Flex flexDir='column'>
				<TextBold fontSize='1.25rem'>{data?.title}</TextBold>
				<TextNormal fontSize='1rem'>{data?.text}</TextNormal>
			</Flex>
		</Flex>
	);
};

export default ServiceCart;
