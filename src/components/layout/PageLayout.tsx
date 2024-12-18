/* eslint-disable @typescript-eslint/no-explicit-any */
import { Header } from '@/components';
import React, { FC, ReactNode } from 'react';
import { Box, Text } from '@chakra-ui/react';
import useCustomStyle from '@/hooks/useCustomStyle';
import Link from 'next/link';
type LayoutProps = {
	children?: ReactNode;
};

const styles: any = {
	textAlign: 'center',
	py: '1.5rem',
};
const PageLayout: FC<LayoutProps> = ({ children }) => {
	const { colors } = useCustomStyle();
	return (
		<>
			<Header />
			<Box minH={'80vh'}>{children}</Box>
			<Box bg={colors?.black} color={colors?.lightSecondary} {...styles}>
				<Text as='span'>
					<Link href='https://thinkcrypt.io/'>
						Copyright ©2024 | MINT | ALL RIGHTS RESERVED
					</Link>
				</Text>
			</Box>
		</>
	);
};

export default PageLayout;
