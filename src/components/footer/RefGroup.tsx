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
			</div>
			{item.references.map((reference, index) => {
				return (
					<div
						className='footer__link'
						key={index}>
						<NavLink
							to={`${reference.path}`}>{`${reference.title}`}</NavLink>
					</div>
				);
			})}
		</div>
	);
};

export default RefGroup;
