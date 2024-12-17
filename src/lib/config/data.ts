
import Logo from '../../../public/logo/logo';

export const data = {
	header: {
		logo: Logo,
		navLinks: [
			// dashboard will navigate user to his dashboard
			{
				label: 'Dashboard',
				link: '/dashboard',
			},
		],
	},

	headings: {
		title: 'Find your Template',
		description:
			'Jumpstart your app development process with pre-built solutions from Vercel and our community.',
	},
	backendDemoData: {
		image:
			'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // URL to the image of the theme
		name: 'Demo Theme', // Name of the theme
		price: 5999, // Price of the theme
		isFree: '', // Whether the theme is free or not
		developer: 'Hassan S.', // Name of the developer
		demoUrl: 'https://images.unsplash.com', // URL to the demo of the theme
		framework: 'React/NextJs', // Framework of the theme
		shortDescription: 'This is the most gorgeous theme you will ever find', // Short description of the theme
		description:
			'This is the most gorgeous theme you will ever find. Description of the them lorem 10', // Description of the theme
		isDiscounted: true, // Whether the theme is discounted or not
		discountedPrice: 40, // Discounted price of the theme
		demoVariants: {
			image:
				'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // URL to the image of the theme
			name: 'Demo Theme Dark',
			price: 6999,
			isFree: '',
			developer: 'Hassan S.',
			demoUrl: 'https://images.unsplash.com',
		}, // Variants of the demo
		title: 'Title is dfferent', // Title of the theme if the title is different from name
		useCase: 'Usecase of the theme', // Use case of the theme
		css: 'CSS', // CSS framework used for the theme
		views: 8000, // Number of views of the theme
		likes: 12000, // Number of likes of the theme
		downloads: 100, // Number of downloads of the theme
		slug: 'Slug', // Slug of the theme
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
};

export const addressFields = [
	{
		label: 'Recipient Name',
		type: 'text',
		placeholder: 'Recipient Name',
		fieldKey: 'name',
		isRequired: true,
	},
	{
		label: 'Recipient Email',
		type: 'email',
		placeholder: 'Recipient Email',
		fieldKey: 'email',
		isRequired: true,
	},
	{
		label: 'Recipient Phone',
		type: 'text',
		placeholder: 'Recipient Phone',
		fieldKey: 'phone',
		isRequired: true,
	},
	{
		label: 'Street Address',
		type: 'textarea',
		placeholder: 'Street Address',
		fieldKey: 'street',
		isRequired: true,
	},
	{
		label: 'City',
		type: 'text',
		placeholder: 'City',
		fieldKey: 'city',
		isRequired: true,
	},
	{
		label: 'State',
		type: 'text',
		placeholder: 'State',
		fieldKey: 'state',
		isRequired: false,
	},
	{
		label: 'Country',
		type: 'text',
		placeholder: 'Country',
		fieldKey: 'country',
		isRequired: false,
	},
	{
		label: 'Post Code',
		type: 'number',
		placeholder: 'Post Code',
		fieldKey: 'postalCode',
		isRequired: true,
	},
];
