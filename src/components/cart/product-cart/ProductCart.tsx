import { Column, FlexBox, FullBox, Icon } from '@/components';
import React, { FC } from 'react';
import { padding } from '@/lib/config/constants';

import TagText from './components/TagText';
import AddToCart from './components/IconButton';
import Rating from '@/components/utils/rating/Rating';
import { Box } from '@chakra-ui/react';

type ProductCartProps = {
	data: {
		imgSrc: string;
		hoverImgSrc: string;
		productName: string;
		price: number;
		tags: string[];
		rating: number;
	};
};

const ProductCart: FC<ProductCartProps> = ({ data }) => {
	return (
		<FullBox
			px={{ base: padding.layoutPadding_X_Mobile, lg: padding.layoutPadding_X }}
			bg='red'
		>
			<Box
				alignItems='space-between'
				bg={`url(${data?.imgSrc})`}
				backgroundSize='cover'
				backgroundPosition='center center'
				backgroundRepeat='no-repeat'
				h='full'
				backgroundColor='green'
				w='full'
			>
				<FlexBox justifyContent='space-between'>
					<FlexBox>
						{data?.tags?.map((item, i) => (
							<TagText key={i}>{item}</TagText>
						))}
					</FlexBox>
					<Column>
						<Icon name='add' />
						<Icon name='add' />
					</Column>
				</FlexBox>
				<FlexBox
					bg='red'
					p='16px'
					justifyContent='center'
					w='full'
					alignItems='center'
				>
					<AddToCart w='full'>Add To Cart</AddToCart>
				</FlexBox>
			</Box>
			<Column>
				<Rating ratingValue={data?.rating} />
			</Column>
		</FullBox>
	);
};

export default ProductCart;
