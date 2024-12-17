'use client';
// import { CartDrawer, Logo } from '@/components';
// import { SearchDrawer } from '@/components/index';
import { HeaderZIndex, padding } from '@/lib/config/constants';
import { data } from '@/lib/config/data';
import {
	BoxProps,
	Flex,
	Grid,
	GridItem,
	Heading,
	Text,
	// useDisclosure,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
// import SearchInput from './header-components/SearchInput';
// import SearchButton from './header-components/SearchButton';
// import CartButton from './header-components/CartButton';
import Container from './header-components/Container';
import Link from 'next/link';
import useCustomStyle from '@/hooks/useCustomStyle';

type HeaderProps = BoxProps & {};

const Header: FC<HeaderProps> = ({}) => {
	const { header } = data;
	const { colors } = useCustomStyle();
	const Logo = header?.logo;

	return (
		<Wrapper>
			<GridWrapper>
				<GridItem w='2.5rem' h='2.5rem' alignSelf={'center'}>
					{/* <Logo /> */}
					<Heading w='max-content' fontSize={'1.5rem'}>
						MINT
					</Heading>
				</GridItem>
				<GridItem>
					<Flex justifyContent='flex-end' alignItems='center' h='full'>
						{data?.header?.navLinks.map((navlink, i) => (
							<Flex key={i} gap='1rem'>
								<Text
									color={colors?.titleColor}
									border='1px solid gray'
									rounded='md'
									px='1rem'
									py='0.4rem'
								>
									<Link href={navlink.link}>{navlink?.label}</Link>
								</Text>
							</Flex>
						))}
					</Flex>
				</GridItem>
			</GridWrapper>
		</Wrapper>
	);
};

export default Header;

const Wrapper = ({ children }: { children: ReactNode }) => (
	<Container position='sticky' top='0px' left='0px' zIndex={HeaderZIndex}>
		{children}
	</Container>
);

const GridWrapper = ({ children }: { children: ReactNode }) => (
	<Grid
		px={{
			base: padding.layoutPadding_X_Mobile,
			lg: padding.layoutPadding_X,
		}}
		templateColumns='1fr 1fr'
		gap={2}
		h='full'
	>
		{children}
	</Grid>
);
