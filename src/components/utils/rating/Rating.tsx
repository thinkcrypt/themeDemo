import { Icon } from '@/components/icon';
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type RatingProps = FlexProps & {
	ratingValue: number;
	size?: number;
};

const Rating: FC<RatingProps> = ({ ratingValue, size, ...props }) => {
	return (
		<Flex w='full' h='auto' {...props}>
			{[...Array(5)].map((_, i) => (
				<Icon
					size={size || 18}
					key={i}
					name={i < ratingValue ? 'rating-fill' : 'rating-outline'}
				/>
			))}
		</Flex>
	);
};

export default Rating;
