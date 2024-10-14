/* eslint-disable @typescript-eslint/no-explicit-any */
import { BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import Container from './components/Container';
import BannerImage from './components/BannerImage';
import BannerContent from './components/BannerContent';

// import { HeaderIcon } from '@/components';
type BannerProps = BoxProps & {
	data: any;
};

const Banner: FC<BannerProps> = ({ data, ...props }) => {
	return (
		<Container {...props}>
			<BannerImage imgSrc={data?.imgSrc} />
			<BannerContent data={data} />
		</Container>
	);
};

export default Banner;
