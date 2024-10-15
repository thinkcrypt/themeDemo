import React, { FC } from 'react';
import { ServiceCart } from './components/index';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import useCustomStyle from '@/hooks/useCustomStyle';

type SliderBottomProps = {
	data: {
		imgSrc: string;
		title: string;
		text: string;
	}[];
};

const SliderBottom: FC<SliderBottomProps> = ({ data }) => {
	const { colors } = useCustomStyle();
	return (
		<Box bg={colors.secondary}>
			<Grid
				templateColumns={{
					base: 'repeat(1, 1fr)',
					md: 'repeat(2, 1fr)',
					lg: 'repeat(3, 1fr)',
					xl: 'repeat(4, 1fr)',
				}}
				gap={4}
				borderBottom='1px solid'
				borderColor={colors.primary}
			>
				{data?.map((item, idx) => (
					<GridItem
						key={idx}
						w='100%'
						h={{ base: 'auto', lg: '180px' }}
						bg={colors.secondary}
					>
						<ServiceCart data={item} />
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};

export default SliderBottom;
