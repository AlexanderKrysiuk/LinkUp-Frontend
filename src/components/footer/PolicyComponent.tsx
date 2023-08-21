import {
	PolicyItem,
	PolicySection as references,
} from '@components/footer/ReferenceLinks.ts';
import React from 'react';
import { Link } from 'react-router-dom';

const PolicyComponent = () => {
	return (
		<div className='footer__policy'>
			{references.map((item: PolicyItem, index: number) => {
				return (
					<div className='footer__link'>
						<Link
							to={`${item.path}`}
							key={index}>{`${item.title}`}</Link>
					</div>
				);
			})}
		</div>
	);
};
export default PolicyComponent;
