import { Box, BoxProps, ListItem, UnorderedList } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '@/components';

type PrivacyDataProps = BoxProps & {
	data: {
		label: string;
		shortDescription: string;
		points?: {
			head?: string;
			description?: string;
		}[];
	};
};

const listStyle = {
	position: 'relative',
	'::before': {
		position: 'absolute',
		content: '""',
		top: '1rem',
		left: '-1rem',
		width: '8px',
		height: '8px',
		borderRadius: '50%',
		backgroundColor: '#000',
	},
};

const PrivacyData: FC<PrivacyDataProps> = ({ data, ...props }) => {
	return (
		<Box mb='2rem' {...props}>
			<TextNormal fontSize={{ base: '1.5rem', lg: '2rem' }} mb='.5rem'>
				{data?.label}
			</TextNormal>
			<TextNormal mb='1rem'>{data?.shortDescription}</TextNormal>
			{data?.points && (
				<UnorderedList position='relative'>
					{data?.points?.map((item, i) => (
						<ListItem py='.5rem' sx={listStyle} key={i}>
							{item?.head && (
								<TextNormal display='inline-block' fontWeight='600'>
									{item.head}
								</TextNormal>
							)}
							<TextNormal display='inline'>{item?.description}</TextNormal>
						</ListItem>
					))}
				</UnorderedList>
			)}
		</Box>
	);
};

export default PrivacyData;
