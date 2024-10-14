import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type FullBoxProps = BoxProps & {
	children: ReactNode;
};

const FullBox: FC<FullBoxProps> = ({ children, ...props }) => {
	return (
		<Box w='full' h='full' {...props}>
			{children}
		</Box>
	);
};

export default FullBox;
