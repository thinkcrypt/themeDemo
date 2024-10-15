import useCustomStyle from '@/hooks/useCustomStyle';
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from '@chakra-ui/react';
import React from 'react';

const ProductAccordion = () => {
	const { colors } = useCustomStyle();
	return (
		<Accordion defaultIndex={[0]} allowMultiple>
			<AccordionItem
				border='none'
				borderBottom={`1px solid ${colors?.primary}`}
			>
				<h2>
					<AccordionButton px={0} _hover={{ backgroundColor: 'transparent' }}>
						<Box as='span' flex='1' textAlign='left'>
							Product Details
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel px={0} pb={4}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</AccordionPanel>
			</AccordionItem>
			<AccordionItem
				border='none'
				borderBottom={`1px solid ${colors?.primary}`}
			>
				<h2>
					<AccordionButton px={0} _hover={{ backgroundColor: 'transparent' }}>
						<Box as='span' flex='1' textAlign='left'>
							Shipping & Return
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel px={0} pb={4}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default ProductAccordion;
