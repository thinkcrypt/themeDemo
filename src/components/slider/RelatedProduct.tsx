'use client';
import React, { FC } from 'react';
import { Box, Center } from '@chakra-ui/react';
import useCustomStyle from '@/hooks/useCustomStyle';
import { CommonTitle } from '@/components/utils';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import ProductCart from '../home/products/components/ProductCart';
import { cartBoxShadow, productCartHeight } from '@/lib/config/constants';

const swiperBreakpoints = {
	320: {
		slidesPerView: 1,
	},
	480: {
		slidesPerView: 2,
	},
	768: {
		slidesPerView: 3,
	},
	1024: {
		slidesPerView: 5,
	},
};

type RelatedProrductProps = {
	data: {
		imgSrc: string;
		productName: string;
		price: number;
		rating: number;
	}[];
};

const RelatedProrduct: FC<RelatedProrductProps> = ({ data }) => {
	const { colors } = useCustomStyle();

	return (
		<Box py='4rem' bg={colors.secondary}>
			<CommonTitle mb='4rem'>Related Products</CommonTitle>
			<Swiper
				spaceBetween={20}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				breakpoints={swiperBreakpoints}
			>
				{data?.map((item, i) => (
					<SwiperSlide key={i}>
						<Center
							bg={colors.secondary}
							w='full'
							h={productCartHeight}
							boxShadow={cartBoxShadow}
						>
							<ProductCart data={item} />
						</Center>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default RelatedProrduct;
