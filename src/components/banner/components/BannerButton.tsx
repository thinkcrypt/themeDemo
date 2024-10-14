import useCustomStyle from '@/hooks/useCustomStyle';
import { Button, Flex, FlexProps } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type BannerButtonProps = FlexProps & {
	btnText: string;
	btnLink: string;
};

const BannerButton: FC<BannerButtonProps> = ({
	btnText,
	btnLink,
	...props
}) => {
	const { colors } = useCustomStyle();
	return (
		<Flex gap='4' {...props}>
			<Link href={btnLink}>
				<Button
					color={colors?.black}
					borderRadius='0px'
					w='full'
					h='auto'
					p='16px 18px'
					bg={colors?.white}
					border={`1px solid ${colors?.white}`}
					_hover={{ backgroundColor: 'transparent', color: colors?.white }}
				>
					{btnText}
				</Button>
			</Link>
		</Flex>
	);
};

export default BannerButton;
