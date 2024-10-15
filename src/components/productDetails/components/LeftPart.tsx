import { FullBox } from '@/components/utils';
import { Center, CenterProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type LeftPartProps = CenterProps & {
	imgSrc: string;
};

const LeftPart: FC<LeftPartProps> = ({ imgSrc, ...props }) => {
	return (
		<Center alignItems='flex-start' {...props}>
			<FullBox w='30rem' h='34rem'>
				<Image
					src={imgSrc}
					w='full'
					h='full'
					objectFit='cover'
					alt='Product Image'
					borderRadius='.5rem'
				/>
			</FullBox>
		</Center>
	);
};

export default LeftPart;
