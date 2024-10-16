import { Box, Center } from '@chakra-ui/react';
import { Overlay, TextNormal } from '@/components';
import { FC } from 'react';
import useCustomStyle from '@/hooks/useCustomStyle';
type SmallBannerProps = {
	bannarData?: {
		imgSrc?: string;
		text?: string;
	};
};

const SmallBanner: FC<SmallBannerProps> = ({ bannarData }) => {
	const { colors } = useCustomStyle();
	return (
		<Box
			w='full'
			h={{ base: '16rem', lg: '24rem' }}
			backgroundPosition={{ base: 'center center', lg: 'center center' }}
			backgroundSize='cover'
			backgroundImage={`url(${bannarData?.imgSrc})`}
			backgroundRepeat='no-repeat'
			position='relative'
		>
			<Center w='full' h='full'>
				<Overlay bg='rgba(0,0,0,0.3)' />
				<TextNormal zIndex={'3'} fontSize='3rem' color={colors?.white}>
					{bannarData?.text}
				</TextNormal>
			</Center>
		</Box>
	);
};

export default SmallBanner;
