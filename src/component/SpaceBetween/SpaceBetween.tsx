import { Flex } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

import { FlexProps } from '@chakra-ui/react';

type SpaceBetween = FlexProps & {
	children: ReactNode;
};

const SpaceBetween: FC<SpaceBetween> = ({ children, ...props }) => {
	return (
		<Flex alignItems={'center'} justifyContent={'space-between'} {...props}>
			{children}
		</Flex>
	);
};

export default SpaceBetween;
