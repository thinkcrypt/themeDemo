'use client';
import { PageLayout, SectionPadding } from '@/components';
import ProductDetails from '@/components/productDetails/ProductDetails';
import RelatedProrduct from '@/components/slider/RelatedProduct';
import useCustomStyle from '@/hooks/useCustomStyle';
import { data } from '@/lib/config/data';

export default function Home() {
	const { singleProduct } = data;
	const { colors } = useCustomStyle();

	return (
		<PageLayout>
			<SectionPadding bg={colors?.secondary}>
				<ProductDetails data={singleProduct?.productDetails} />
			</SectionPadding>

			<SectionPadding bg={colors?.secondary}>
				<RelatedProrduct data={singleProduct?.relatedProducts} />
			</SectionPadding>
		</PageLayout>
	);
}
