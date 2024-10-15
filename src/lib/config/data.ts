import { FiUser, FiSearch, FiHeart } from 'react-icons/fi';
import { LuShoppingBag } from 'react-icons/lu';

export const data = {
	topHeader: {
		textFirst: 'Free shipping on orders $99 and above',
		textSecond: 'Save up to 20% on all new users',
	},
	header: {
		logo: '/logo/headerLogo.svg',
		navLinks: [
			{
				label: 'Home',
				link: '/',
			},
			{
				label: 'Shop',
				link: '/shop',
			},
			{
				label: 'Collections',
				link: '/collections',
			},
			{
				label: 'Pages',
				link: '/pages',
			},
			{
				label: 'Blog',
				link: '/blog',
			},
			{
				label: 'Features',
				link: '/features',
			},
		],
		icons: [
			{
				icon: FiSearch,
			},
			{
				icon: FiUser,
			},
			{
				icon: FiHeart,
			},
			{
				icon: LuShoppingBag,
			},
		],
	},

	bannerData: {
		label: 'Handmade Crockery Collection',
		title: 'Elegant crockery makes meals special',
		imgSrc: './slider/sliderOne.webp',
		btn: {
			text: 'Shop Collection',
			link: '/',
		},
	},
	homePageServices: [
		{
			imgSrc: '/home/service/serviceOne.svg',
			title: 'Modern plate',
			text: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
		},
		{
			imgSrc: '/home/service/serviceTwo.svg',
			title: 'Trendy vase',
			text: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
		},
		{
			imgSrc: '/home/service/serviceThree.svg',
			title: 'Handmade mug',
			text: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
		},
		{
			imgSrc: '/home/service/serviceFour.svg',
			title: 'Classic pottery',
			text: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
		},
	],

	categories: [
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Winter',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Summer',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Winter',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Summer',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Winter',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Summer',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Winter',
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			name: 'Summer',
		},
	],

	products: [
		{
			imgSrc: '/searchProduct/productOne.webp',
			productName: 'Africana katori set',
			price: 20,
			rating: 3,
		},
		{
			imgSrc: '/searchProduct/productTwo.webp',
			productName: 'Africana katori set',
			price: 200,
			rating: 3,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			productName: 'Africana katori set',
			price: 20,
			rating: 4,
		},
		{
			imgSrc: '/searchProduct/productTwo.webp',
			productName: 'Africana katori set',
			price: 200,
			rating: 2,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			productName: 'Africana katori set',
			price: 20.0,
			rating: 5,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			productName: 'Africana katori set',
			price: 20,
			rating: 3,
		},
		{
			imgSrc: '/searchProduct/productTwo.webp',
			productName: 'Africana katori set',
			price: 200,
			rating: 3,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			productName: 'Africana katori set',
			price: 20,
			rating: 4,
		},
		{
			imgSrc: '/searchProduct/productTwo.webp',
			productName: 'Africana katori set',
			price: 200,
			rating: 2,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			productName: 'Africana katori set',
			price: 20.0,
			rating: 5,
		},
	],

	footer: {
		address: {
			label: 'Contact Us',
			address: '23 Market street san francisco HG 76543, United States.',
			phone: '(+983) 1234567',
			mail: 'hello@domain.com',
		},
		pages: {
			label: 'Quick Links',
			links: [
				{
					name: 'About',
					link: '/about',
				},
				{
					name: 'Privacy Policy',
					link: '/privacy',
				},
				{
					name: 'Refund, Return & Cancellation Policy',
					link: '/refund',
				},
			],
		},
	},
};

