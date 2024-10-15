import { Icon } from '@/components/icon';
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type RatingProps = FlexProps & {
	ratingValue: number;
	size?: number;
	color?: string;
};

const Rating: FC<RatingProps> = ({ ratingValue, size, color, ...props }) => {
	return (
		<Flex {...props}>
			{[...Array(5)].map((_, i) => (
				<Icon
				    color={color}
					size={size || 18}
					key={i}
					name={i < ratingValue ? 'rating-fill' : 'rating-outline'}
				/>
			))}
		</Flex>
	);
};

export default Rating;
