import { Icon } from '@/components/icon';
import React, { FC } from 'react';

type RatingProps = {
	ratingValue: number;
	size?: number;
};

const Rating: FC<RatingProps> = ({ ratingValue, size }) => {
	return (
		<>
			{[...Array(5)].map((_, i) => (
				<Icon
					size={size || 18}
					key={i}
					name={i < ratingValue ? 'rating-fill' : 'rating-outline'}
				/>
			))}
		</>
	);
};

export default Rating;
