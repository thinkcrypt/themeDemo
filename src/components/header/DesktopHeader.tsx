'use client';
import { DesktopLogo } from '@/components';
import { SearchDrawer } from '@/components/index';
import useCustomStyle from '@/hooks/useCustomStyle';
import { padding, searchInputWidth } from '@/lib/config/constants';
import { data } from '@/lib/config/data';
import {
	Box,
	BoxProps,
	Flex,
	Grid,
	GridItem,
	useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';
import SearchInput from './header-components/SearchInput';
import SearchButton from './header-components/SearchButton';
import CartButton from './header-components/CartButton';

type DesktopHeaderProps = BoxProps & {};

const DesktopHeader: FC<DesktopHeaderProps> = ({ ...props }) => {
	const { header } = data;
	const { isOpen, onOpen: onSearchDrawerOpen, onClose } = useDisclosure();
	const { colors } = useCustomStyle();

	return (
		<Box
			w='full'
			h='80px'
			bg={colors.secondary}
			borderBottom={`1px solid ${colors?.lightPrimary}`}
			py='.5rem'
			{...props}
		>
			<Grid
				px={padding.layoutPadding_X}
				templateColumns='repeat(2, 1fr)'
				gap={2}
				h='full'
			>
				<GridItem>
					<DesktopLogo imgSrc={header?.logo} />
				</GridItem>
				<GridItem>
					<Flex justifyContent='flex-end' alignItems='center' h='full'>
						<SearchInput width={searchInputWidth} />
						<SearchButton onOpen={onSearchDrawerOpen} />
						<CartButton />
					</Flex>
				</GridItem>
			</Grid>

			{/* This drawer will open from top section */}
			<SearchDrawer isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

export default DesktopHeader;
