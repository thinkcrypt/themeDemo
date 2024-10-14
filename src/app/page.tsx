'use client';
import { PageLayout, SliderBottom, Banner, Categories } from '@/components';
import { data } from '@/lib/config/data';

export default function Home() {
	const { homePageServices } = data;

	return (
		<PageLayout>
			{/* Slider */}
			<Banner data={data?.bannerData} />
			{/* Slider Bottom */}
			<SliderBottom data={homePageServices} />

			<Categories data={data?.categories} />

			{/* Fresh arrivals */}
			{/* <FreshArrivals /> */}
		</PageLayout>
	);
}
