import { DesktopHeader, TopHeader } from '@/components';
import React, { FC, ReactNode } from 'react';
import { data } from '@/lib/config/data';
import { Box } from '@chakra-ui/react';
type LayoutProps = {
	children?: ReactNode;
};

const PageLayout: FC<LayoutProps> = ({ children }) => {
	const { topHeader } = data;
	return (
		<>
			<TopHeader data={topHeader} />
			<DesktopHeader />
			<Box minH={'80vh'}>{children}</Box>
		</>
	);
};

export default PageLayout;
