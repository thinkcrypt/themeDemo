import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { padding } from '@/lib/config/constants';

type ContainerProps = BoxProps & {
	children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children, ...props }) => {
	return (
		<Box
			w='full'
			h='auto'
			px={{ base: padding.layoutPadding_X_Mobile, lg: padding.layoutPadding_X }}
			{...props}
		>
			{children}
		</Box>
	);
};

export default Container;
