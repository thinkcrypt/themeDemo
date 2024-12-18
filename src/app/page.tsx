/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { PageLayout, SectionPadding } from '@/components';
import { ReactNode } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import Title from '@/component/Title/Title';
import { ThemeCard } from '@/component';
import { layoutMargin } from '@/lib/config/constants';
// import { data } from '@/lib/config/data';
import { useGetAllQuery } from '@/store/services/commonApi';
import CustomSkeleton from '@/component/Skeleton/Skeleton';

const CARD_BREAKPOINTS = {
	base: '1fr',
	sm: '1fr 1fr',
	md: '1fr 1fr 1fr',
	// lg:
};

export default function Home() {
	const { data, isLoading } = useGetAllQuery({ path: 'themes' });
	return (
		<PageLayout>
			<SectionWrapper>
				<Box mt='2rem'>
					<Title />
				</Box>
				{isLoading ? (
					<Box mt='2rem'>
						<CustomSkeleton />
					</Box>
				) : (
					<Grid
						mt={layoutMargin?.mt}
						gridTemplateColumns={CARD_BREAKPOINTS}
						gridRowGap={'50px'}
						gridColumnGap={'10px'}
						mb='7rem'
					>
						{data?.doc?.map((item: any, i: number) => (
							<ThemeCard key={i} backendData={item} />
						))}
					</Grid>
				)}
			</SectionWrapper>
		</PageLayout>
	);
}

const SectionWrapper = ({ children }: { children: ReactNode }) => {
	return <SectionPadding>{children}</SectionPadding>;
};
