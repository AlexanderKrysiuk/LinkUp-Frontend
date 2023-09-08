import PillComponent from '@components/utils/buttons/PillComponent.tsx';
import React from 'react';

import routes from '../ProfileMenuItems.ts';

interface CategoriesProps {
	selectedCategory: string; // Add this line
	onCategoryClick: (category: string) => void;
}

const CategoriesComponent = ({ onCategoryClick }: CategoriesProps) => {
	return (
		<ul className='profile__header_categories'>
			<li>
				{routes.map((item, index) => (
					<PillComponent
						key={index}
						onClick={() => onCategoryClick(item.routeName)}
						text={item.routeName}
					/>
				))}
			</li>
		</ul>
	);
};

export default CategoriesComponent;
