'use client';
import { PageLayout, Banner } from '@/components';
import { data } from '@/lib/config/data';

export default function Home() {
	return (
		<PageLayout>
			{/* Slider */}
			<Banner data={data?.bannerData} />
			{/* Slider Bottom */}
		</PageLayout>
	);
}
