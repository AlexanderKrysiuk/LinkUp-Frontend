/**
 * @module ReferenceLinks
 * @description Module containing type definitions and data for footer reference links.
 */

/**
 * Type definition for a single reference link.
 */
export type Reference = {
	title: string;
	path: string;
};

/**
 * Type definition for a group of reference links with a common name.
 */
export type ReferenceItem = {
	groupName: string;
	references: Reference[];
};

/**
 * Array containing groups of reference links.
 */
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

/**
 * Type definition for a single policy link.
 */
export type PolicyItem = {
	title: string;
	path: string;
};

/**
 * Array containing policy links.
 */
export const PolicySection: PolicyItem[] = [
	{ title: 'About us', path: '/Mock' },
	{ title: 'Privacy', path: '/Mock' },
	{ title: 'Terms & Conditions', path: '/Mock' },
	{ title: 'Cookie settings', path: '/Mock' },
];
