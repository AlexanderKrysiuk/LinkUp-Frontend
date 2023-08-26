import RefGroup from '@components/footer/RefGroup.tsx';
import { ReferenceLinks } from '@components/footer/ReferenceLinks.ts';
import React from 'react';

const RefSection = () => {
	return (
		<div className='footer__reference-section'>
			{ReferenceLinks.map((item, index) => {
				return (
					<RefGroup
						item={item}
						key={index}
					/>
				);
			})}
		</div>
	);
};

export default RefSection;
