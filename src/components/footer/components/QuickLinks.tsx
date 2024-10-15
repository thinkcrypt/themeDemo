import { TextNormal, Icon, Column } from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, BoxProps, Flex, Text, TextProps } from '@chakra-ui/react';
import Link from 'next/link';

import React, { FC } from 'react';

type QuickLinksProps = BoxProps & {
	data: {
		label: string;
		links: { link: string; name: string }[];
	};
};

const QuickLinks: FC<QuickLinksProps> = ({ data, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Box color={colors?.white}>
			<TextNormal
				mb='1rem'
				fontWeight='600'
				fontSize='2rem'
				color={colors?.white}
			>
				{data?.label}
			</TextNormal>
			<Column gap={3}>
				{data?.links?.map((item, i) => (
					<Link key={i} href={item?.link}>
						<TextNormal
							_hover={{ textDecoration: 'underline' }}
							color={colors?.lightWhite}
							display='inline-block'
						>
							{item?.name}
						</TextNormal>
					</Link>
				))}
			</Column>
		</Box>
	);
};

export default QuickLinks;
