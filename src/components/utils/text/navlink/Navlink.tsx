'use client';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Text, TextProps } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type NavlinkProps = TextProps & {
	children: string;
	href: string;
};

const Navlink: FC<NavlinkProps> = ({ href, children, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Link href={href}>
			<Text
				fontFamily='inter'
				fontSize='1rem'
				fontWeight='600'
				lineHeight='24px'
				color={colors.menuTextColor}
				{...props}
			>
				{children}
			</Text>
		</Link>
	);
};

export default Navlink;
