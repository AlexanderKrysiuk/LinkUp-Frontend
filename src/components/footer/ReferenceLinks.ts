export type Reference = {
	title: string;
	path: string;
};

export type ReferenceItem = {
	groupName: string;
	references: Reference[];
};

export const ReferenceLinks: ReferenceItem[] = [
	{
		groupName: 'Product',
		references: [
			{ title: 'How it works', path: '/Mock' },
			{ title: 'Features', path: '/Mock' },
			{ title: 'Pricing', path: '/Mock' },
		],
	},
	{
		groupName: 'Support',
		references: [
			{ title: 'FAQ', path: '/Mock' },
			{ title: 'API documentation', path: '/Mock' },
		],
	},
	{
		groupName: 'Connect',
		references: [
			{ title: 'Sign up', path: '/Register' },
			{ title: 'Contact us', path: '/Contact' },
		],
	},
];

export type PolicyItem = {
	title: string;
	path: string;
};

export const PolicySection: PolicyItem[] = [
	{ title: 'About us', path: '/Mock' },
	{ title: 'Privacy', path: '/Mock' },
	{ title: 'Terms & Conditions', path: '/Mock' },
	{ title: 'Cookie settings', path: '/Mock' },
];
