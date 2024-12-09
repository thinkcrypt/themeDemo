'use client';
import {
	PageLayout,
	SliderBottom,
	Banner,
	Categories,
	SectionPadding,
	Products,
	CommonTitle,
} from '@/components';
import { ProductCarousel } from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';
import { data } from '@/lib/config/data';
import { BoxProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export default function Home() {
	const { homePageServices, products, categoriesData } = data;
	const { colors } = useCustomStyle();

	return (
		<PageLayout>
			{/* Slider */}
			<Banner data={data?.bannerData} />
			{/* Slider Bottom */}
			<SectionPadding bg={colors?.secondary}>
				<SliderBottom data={homePageServices} />
			</SectionPadding>

			<SectionPadding bg={colors?.secondary}>
				<Categories data={categoriesData?.doc} />
			</SectionPadding>
			{/* Products*/}
			<SectionWrapper borderBottom={`1px solid ${colors?.primary}`}>
				<CommonTitle mb='4rem'>Products</CommonTitle>
				<Products data={products?.doc} />
			</SectionWrapper>

			<SectionWrapper>
				<CommonTitle mb='4rem'>Sports Collections</CommonTitle>
				<ProductCarousel data={products?.doc} />
			</SectionWrapper>

			<SectionWrapper>
				<CommonTitle mb='4rem'>Winter Collections</CommonTitle>
				<ProductCarousel data={products?.doc} />
			</SectionWrapper>
		</PageLayout>
	);
}

export const SectionWrapper: FC<BoxProps & { children: ReactNode }> = ({
	children,
	...props
}) => {
	const { colors } = useCustomStyle();
	return (
		<SectionPadding py='4rem' bg={colors?.secondary} {...props}>
			{children}
		</SectionPadding>
	);
};
