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
	// searchDrawer: {
	// 	header: {
	// 		title: 'What are you looking for?',
	// 		input: true,
	// 		searchTag: ['Bath', 'Decor', 'Kitchen'],
	// 	},
	// 	body: {
	// 		title: 'Popular Products',
	// 		products: [
	// 			{
	// 				imgSrc: '/searchProduct/productOne.webp',
	// 				hoverImgSrc: '/searchProduct/productTwo.webp',
	// 				productName: 'Africana katori set',
	// 				price: 20.0,
	// 				tags: ['sale'],
	// 				rating: 5,
	// 			},
	// 			{
	// 				imgSrc: '/searchProduct/productOne.webp',
	// 				hoverImgSrc: '/searchProduct/productTwo.webp',
	// 				productName: 'Africana katori set',
	// 				price: 20.0,
	// 				tags: ['sale'],
	// 				rating: 5,
	// 			},
	// 			{
	// 				imgSrc: '/searchProduct/productOne.webp',
	// 				hoverImgSrc: '/searchProduct/productTwo.webp',
	// 				productName: 'Africana katori set',
	// 				price: 20.0,
	// 				tags: ['sale'],
	// 				rating: 5,
	// 			},
	// 			{
	// 				imgSrc: '/searchProduct/productOne.webp',
	// 				hoverImgSrc: '/searchProduct/productTwo.webp',
	// 				productName: 'Africana katori set',
	// 				price: 20.0,
	// 				tags: ['sale'],
	// 				rating: 5,
	// 			},
	// 			{
	// 				imgSrc: '/searchProduct/productOne.webp',
	// 				hoverImgSrc: '/searchProduct/productTwo.webp',
	// 				productName: 'Africana katori set',
	// 				price: 20.0,
	// 				tags: ['sale'],
	// 				rating: 5,
	// 			},
	// 			{
	// 				imgSrc: '/searchProduct/productOne.webp',
	// 				hoverImgSrc: '/searchProduct/productTwo.webp',
	// 				productName: 'Africana katori set',
	// 				price: 20.0,
	// 				tags: ['sale'],
	// 				rating: 5,
	// 			},
	// 		],
	// 	},
	// },
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

	freshArrivals: [
		{
			imgSrc: '/searchProduct/productOne.webp',
			hoverImgSrc: '/searchProduct/productTwo.webp',
			productName: 'Africana katori set',
			price: 20.0,
			tags: ['sale'],
			rating: 3,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			hoverImgSrc: '/searchProduct/productTwo.webp',
			productName: 'Africana katori set',
			price: 20.0,
			tags: [],
			rating: 3,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			hoverImgSrc: '/searchProduct/productTwo.webp',
			productName: 'Africana katori set',
			price: 20.0,
			tags: ['sale'],
			rating: 4,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			hoverImgSrc: '/searchProduct/productTwo.webp',
			productName: 'Africana katori set',
			price: 20.0,
			tags: ['sale'],
			rating: 2,
		},
		{
			imgSrc: '/searchProduct/productOne.webp',
			hoverImgSrc: '/searchProduct/productTwo.webp',
			productName: 'Africana katori set',
			price: 20.0,
			tags: ['sale'],
			rating: 5,
		},
	],
	handCraftedData: {
		imgSrcOne: '',
		imgSrcTwo: '',
		topTitle: 'Contemporary ceramics made by natural and pure materials.',
		textTitle: 'Handcrafted by the artist in Hongo',
		description:
			'Lorem ipsum been the industry standard dummy text ever sincethe when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
	},
	designersChoice: [
		{
			imgSrc: '',
			hoverImgSrc: '',
			productName: 'Africana katori set',
			price: 20.0,
			tags: ['sale'],
			rating: 5,
		},
		{
			imgSrc: '',
			hoverImgSrc: '',
			productName: 'Africana katori set',
			price: 20.0,
			tags: [],
			rating: 3,
		},
		{
			imgSrc: '',
			hoverImgSrc: '',
			productName: 'Africana katori set',
			price: 20.0,
			tags: ['sale'],
			rating: 4,
		},
		{
			imgSrc: '',
			hoverImgSrc: '',
			productName: 'Africana katori set',
			price: 20.0,
			tags: ['sale'],
			rating: 2,
		},
		{
			imgSrc: '',
			hoverImgSrc: '',
			productName: 'Africana katori set',
			price: 20.0,
			tags: ['sale'],
			rating: 5,
		},
	],
	homePageBanner: {
		one: {
			label: 'Latest Design',
			title: 'Summer Collection',
			btnText: 'Shop Now',
			btnLink: '',
			imgSrc: '',
		},
		two: {
			label: 'Hot Season',
			title: "Men's hoddies",
			btnText: 'Shop Now',
			btnLink: '',
			imgSrc: '',
		},
		three: {
			label: 'Latest Design',
			title: 'Summer Collection',
			btnText: 'Shop Now',
			btnLink: '',
			imgSrc: '',
		},
		four: {
			label: 'Upto 20% Off',
			title: 'Women Collection',
			btnText: 'Shop Now',
			btnLink: '',
			imgSrc: '',
		},
	},
	articles: [
		{
			imgSrc: '',
			title: "From clay to masterpiece: a beginner's guide to pottery.",
			authorName: 'By Alexie Rechards',
		},
		{
			imgSrc: '',
			title: 'Refreshing your home with handmade decor for each season.',
			authorName: 'By Alexie Rechards',
		},
		{
			imgSrc: '',
			title: 'Choosing the perfect handmade decor for any occasion.',
			authorName: 'By Alexie Rechards',
		},
		{
			imgSrc: '',
			title: 'How to infuse home with personality using crafted decor.',
			authorName: 'By Alexie Rechards',
		},
		{
			imgSrc: '',
			title: 'Unique handcrafted ceramic tableware creations and designs.',
			authorName: 'By Alexie Rechards',
		},
	],
	footer: {
		address: {
			label: 'Store location',
			address: '23 Market street san francisco HG 76543, United States.',
			phone: '(+983) 1234567',
			mail: 'hello@domain.com',
		},
	},
};

export const currency = {
	code: 'BDT',
	symbol: '৳',
};
