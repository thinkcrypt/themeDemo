/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { PageLayout, SectionPadding } from '@/components';
import { ReactNode } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import Title from '@/component/Title/Title';
import { ThemeCard } from '@/component';
// import { data } from '@/lib/config/data';
import { useGetAllQuery } from '@/store/services/commonApi';
import CustomSkeleton from '@/component/Skeleton/Skeleton';

////////////////////// STYLES
const CARD_BREAKPOINTS = {
	base: '1fr',
	sm: '1fr 1fr',
	md: '1fr 1fr 1fr',
	// lg:
};
const MARGIN_TOP = '70px';
const ROW_GAP = '50px';
const COLUMN_GAP = '10px';
const MARGIN_BOTTOM = '7rem';

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
					<ThemeCardWrapper>
						{data?.doc?.map((item: any, i: number) => (
							<ThemeCard key={i} backendData={item} />
						))}
					</ThemeCardWrapper>
				)}
			</SectionWrapper>
		</PageLayout>
	);
}

const SectionWrapper = ({ children }: { children: ReactNode }) => {
	return <SectionPadding>{children}</SectionPadding>;
};
const ThemeCardWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<Grid
			mt={MARGIN_TOP}
			gridTemplateColumns={CARD_BREAKPOINTS}
			gridRowGap={ROW_GAP}
			gridColumnGap={COLUMN_GAP}
			mb={MARGIN_BOTTOM}
		>
			{children}
		</Grid>
	);
};
