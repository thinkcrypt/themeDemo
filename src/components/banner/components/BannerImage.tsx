import { Image, ImageProps } from '@chakra-ui/react';

import React, { FC } from 'react';

type BannerImageProps = ImageProps & {
	imgSrc: string;
};

const BannerImage: FC<BannerImageProps> = ({ imgSrc, ...props }) => {
	return (
		<Image
			w='full'
			h='full'
			objectFit='cover'
			src={imgSrc}
			alt='BannerImage'
			{...props}
		/>
	);
};

export default BannerImage;
