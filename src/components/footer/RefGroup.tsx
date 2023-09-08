import {
	ReferenceItem,
	ReferenceLinks,
} from '@components/footer/ReferenceLinks.ts';

import React from 'react';

import { NavLink } from 'react-router-dom';

type ReferenceLinks = {
	item: ReferenceItem;
};

const RefGroup = ({ item }: ReferenceLinks) => {
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
