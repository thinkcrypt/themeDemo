'use client';
import {
	PageLayout,
	// SliderBottom,
	Banner,
	// Categories,
	SectionPadding,
	// Products,
	// CommonTitle,
} from '@/components';
// import { ProductCarousel } from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';
import { data } from '@/lib/config/data';
import { ReactNode } from 'react';
import { ThemeCard, Title } from './component';
import { Box } from '@chakra-ui/react';

export default function Home() {
	const {
		// homePageServices,
		// products,
		// categoriesData,
	} = data;
	const { colors } = useCustomStyle();

	return (
		<PageLayout>
			<SectionWrapper>
				<Box mt='2rem'>
					<Title />
				</Box>
				<Box>
					<ThemeCard />
				</Box>
			</SectionWrapper>
		</PageLayout>
	);
}

const SectionWrapper = ({ children }: { children: ReactNode }) => {
	const { colors } = useCustomStyle();
	return <SectionPadding>{children}</SectionPadding>;
};
