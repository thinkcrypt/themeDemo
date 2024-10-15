import { Icon } from '@/components/icon';

import useCustomStyle from '@/hooks/useCustomStyle';
import { Center, CenterProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type WishListProps = CenterProps & {};

const WishList: FC<WishListProps> = ({ ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Center
			border={`1px solid ${colors?.primary}`}
			w='full'
			h='full'
			borderRadius='4px'
			title='Add to wishlist'
			{...props}
		>
			<Icon color={colors?.textColor} name='wishlist' />
		</Center>
	);
};

export default WishList;
