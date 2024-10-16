/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	FormControl,
	FormControlProps,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import React, { FC } from 'react';

type InputContainerProps = FormControlProps & {
	label?: string;
	type: string;
  handleChange: (key:string, value: string) => void;
  fieldKey: string;
  value: string;
};

const InputContainer: FC<InputContainerProps> = ({ label, type, fieldKey, value, handleChange, ...props }) => {
	return (
		<FormControl w='full' mb='1rem' {...props}>
			<FormLabel>{label}</FormLabel>
			<Input value={value} onChange={(e:any) => handleChange(fieldKey, e.target.value)} type={type} />
		</FormControl>
	);
};

export default InputContainer;
