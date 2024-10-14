import { Icon } from '@/components/icon';
import { InputRadius } from '@/lib/config/constants';
import { Box, Center, CenterProps, Input } from '@chakra-ui/react';
import React, { FC } from 'react';

type SearchInputProps = CenterProps & {
	children?: string;
};

const SearchInput: FC<SearchInputProps> = ({ ...props }) => {
	return (
		<Center
			position='relative'
			mr='16px'
			display={{ base: 'none', lg: 'flex' }}
			{...props}
		>
			<Input
				pr='3rem'
				type='text'
				placeholder='Search your desired products'
				borderRadius={InputRadius}
				w='30rem'
				py='1.5rem'
			/>
			<Box position='absolute' top='16px' right='16px'>
				<Icon name='search' />
			</Box>
		</Center>
	);
};

export default SearchInput;
