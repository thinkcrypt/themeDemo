import { CommonTitle, TextNormal } from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import BannerButton from './BannerButton';

type BannerContentProps = FlexProps & {
	data: {
		label: string;
		title: string;
		btn: {
			text: string;
			link: string;
		};
	};
};

const BannerContent: FC<BannerContentProps> = ({ data, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Flex
			w={{ base: '100%', lg: '80%' }}
			position='absolute'
			direction='column'
			align='center'
			color='white'
			textAlign='center'
			p='1.5rem'
			{...props}
		>
			<TextNormal
				textTransform='uppercase'
				color={colors.white}
				lineHeight='1.5rem'
				mb='1rem'
			>
				{data?.label}
			</TextNormal>
			<CommonTitle
				mb='3rem'
				fontSize={{ base: '2.6rem', lg: '5.6rem' }}
				lineHeight={{ base: '2.8rem', lg: '5rem' }}
				color={colors.white}
			>
				{data?.title}
			</CommonTitle>
			<BannerButton btnLink={data?.btn?.link} btnText={data?.btn?.text} />
		</Flex>
	);
};

export default BannerContent;
