/* eslint-disable @typescript-eslint/no-explicit-any */
import useCustomStyle from '@/hooks/useCustomStyle';
import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionItemProps,
	AccordionPanel,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '../utils';

type FaqItemProps = AccordionItemProps & {
	data: {
		question: string;
		answer: string;
	};
};

const FaqItem: FC<FaqItemProps> = ({ data, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<AccordionItem
			border='none'
			borderBottom={`1px solid ${colors?.primary}`}
			{...props}
		>
			<AccordionButton
				py='1rem'
				px={0}
				_hover={{ backgroundColor: 'transparent' }}
			>
				<TextNormal fontWeight='600' flex='1' textAlign='left'>
					{data?.question}
				</TextNormal>
				<AccordionIcon />
			</AccordionButton>

			<AccordionPanel px={0} pb={4}>
				{data?.answer}
			</AccordionPanel>
		</AccordionItem>
	);
};

export default FaqItem;
