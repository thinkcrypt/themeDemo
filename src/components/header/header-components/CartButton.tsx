import { Icon } from '@/components/icon';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Center, CenterProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CartButtonProps = CenterProps & {
	children?: string;
	onOpen?: () => void;
};

const CartButton: FC<CartButtonProps> = ({ onOpen, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Center
			w='2.8rem'
			h='2.8rem'
			borderRadius='50%'
			backgroundColor={colors?.primary}
			cursor='pointer'
			onClick={onOpen}
			{...props}
		>
			<Icon color={colors.white} size={18} name='cart' />
		</Center>
	);
};

export default CartButton;
