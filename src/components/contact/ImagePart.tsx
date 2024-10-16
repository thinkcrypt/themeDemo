import { Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type ImagePartProps = FlexProps & {
	imgSrc?: string;
};

const ImagePart: FC<ImagePartProps> = ({ imgSrc, ...props }) => {
	return (
		<Flex w='full' h='full' {...props}>
			<Image
				w='full'
				h='full'
				objectFit='cover'
				src={imgSrc}
				alt='Contact Image'
			/>
		</Flex>
	);
};

export default ImagePart;
