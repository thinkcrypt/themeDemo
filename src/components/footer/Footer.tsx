import { Box, BoxProps, Grid, GridItem } from '@chakra-ui/react';
import React, { FC } from 'react';
import Contact from './components/Contact';
import QuickLinks from './components/QuickLinks';
import SearchInput from '../header/header-components/SearchInput';
import { searchInputWidth } from '@/lib/config/constants';

type FooterProps = BoxProps & {
	data: any;
};

const Footer: FC<FooterProps> = ({ data, ...props }) => {
	return (
		<Box py='4rem' {...props}>
			<Grid templateColumns='repeat(3, 1fr)' gap={6}>
				<GridItem w='100%' h='auto'>
					<Contact data={data?.address} />
				</GridItem>
				<GridItem w='100%' h='auto'>
					<QuickLinks data={data?.pages} />
				</GridItem>
				<GridItem w='100%' h='auto'>
					<Box w='full' h='auto'>
						<SearchInput width={searchInputWidth} />
					</Box>
				</GridItem>
			</Grid>
		</Box>
	);
};

export default Footer;
