import useCustomStyle from '@/hooks/useCustomStyle';
import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SubmitButtonProps = ButtonProps & {
	children?: string;
};

const SubmitButton: FC<SubmitButtonProps> = ({ children, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Button
			w='full'
			bg={colors?.dark}
			color='white'
			py='24px'
			_hover={{ backgroundColor: colors?.black }}
			mt='2rem'
			{...props}
		>
			{children}
		</Button>
	);
};

export default SubmitButton;
