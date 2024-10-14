import { Icon } from '@/components/icon';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Center, CenterProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SearchButtonProps = CenterProps & {
	children?: string;
	onOpen: () => void;
};

const SearchButton: FC<SearchButtonProps> = ({ onOpen, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Center
			w='2.8rem'
			h='2.8rem'
			borderRadius='50%'
			backgroundColor={colors?.primary}
			cursor='pointer'
			display={{ base: 'flex', lg: 'none' }}
			mr='8px'
			onClick={onOpen}
			{...props}
		>
			<Icon color={colors.white} size={18} name='search' />
		</Center>
	);
};

export default SearchButton;
