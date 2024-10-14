import { Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type PhoneLogoProps = FlexProps & {
	imgSrc: string;
};

const PhoneLogo: FC<PhoneLogoProps> = ({ imgSrc, ...props }) => {
	return (
		<Flex
			w='full'
			h='full'
			alignItems='center'
			justifyContent='center'
			{...props}
		>
			<Image
				w='auto'
				h='30px'
				objectFit='contain'
				src={imgSrc}
				alt='Logo Image'
			/>
		</Flex>
	);
};

export default PhoneLogo;
