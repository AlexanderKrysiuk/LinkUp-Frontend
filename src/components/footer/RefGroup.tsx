/**
 * @module RefGroup
 * @description A React component for rendering a group of reference links in the footer.
 */
import { ReferenceItem, ReferenceLinks } from 'router/ReferenceLinks';

import React from 'react';

import { NavLink } from 'react-router-dom';

/**
 * Props for the `RefGroup` component.
 *
 * @typedef ReferenceLinks
 * @property {ReferenceItem} item - The reference item containing group information and references.
 */
type ReferenceLinks = {
	item: ReferenceItem;
};
/**
 * A React component for rendering a group of reference links in the footer.
 *
 * This component takes a `ReferenceItem` object as a prop and renders a group of reference links in the footer.
 * Each group has a title and a list of reference links.
 *
 * @component
 * @param {ReferenceLinks} props - The component props.
 * @param {ReferenceItem} props.item - The reference item containing group information and references.
 * @returns {JSX.Element} - The rendered reference group component.
 * @example
 * // Import and use the component with a reference item
 * <RefGroup item={referenceItem} />
 */
const RefGroup = ({ item }: ReferenceLinks): JSX.Element => {
	return (
		<div className='footer__reference-category'>
			<div className='footer__reference-category-title'>
				<h4>{item.groupName}</h4>
				<hr className='footer__reference-category-title_split-line' />
			</div>
			{item.references.map((reference, index) => {
				return (
					<div key={index}>
						<NavLink
							className={'footer__link'}
							to={`${reference.path}`}>{`${reference.title}`}</NavLink>
					</div>
				);
			})}
		</div>
	);
};

export default RefGroup;
