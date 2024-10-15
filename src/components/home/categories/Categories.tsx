'use client';
import React, { FC } from 'react';
import { Box, Center } from '@chakra-ui/react';
import useCustomStyle from '@/hooks/useCustomStyle';
import { CommonTitle } from '@/components/utils';
import CategoriesCart from './components/CategoriesCart';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

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

type CategoriesProps = {
	data?: {
		imgSrc: string;
		name: string;
	}[];
};

const Categories: FC<CategoriesProps> = ({ data }) => {
	const { colors } = useCustomStyle();

	return (
		<Box
			py='4rem'
			bg={colors.secondary}
			borderBottom={`1px solid ${colors.primary}`}
		>
			<CommonTitle mb='4rem'>Categories</CommonTitle>
			<Swiper
				spaceBetween={20}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				breakpoints={swiperBreakpoints}
			>
				{data?.map((item, i) => (
					<SwiperSlide key={i}>
						<Center bg={colors.secondary} w='full' h='18rem'>
							<CategoriesCart data={item} />
						</Center>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default Categories;
