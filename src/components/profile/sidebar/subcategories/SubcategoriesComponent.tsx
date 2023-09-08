import PillComponent from '@components/utils/buttons/PillComponent.tsx';
import React from 'react';

import { Link } from 'react-router-dom';

interface SubcategoriesProps {
	subRoutes: submenuItem[];
	selectedCategory: string;
	selectedSubcategory: string;
	onSubcategoryClick: (selectedSubcategory: string) => void;
}

type submenuItem = {
	routeName: string;
};

const SubcategoriesComponent = ({
	selectedCategory,
	subRoutes,
	onSubcategoryClick,
}: SubcategoriesProps): JSX.Element => {
	return (
		<ul>
			{subRoutes.map((subItem) => (
				<li key={subItem.routeName}>
					<Link
						to={`/profile/${selectedCategory}/${subItem.routeName}`}>
						<PillComponent
							text={subItem.routeName}
							onClick={onSubcategoryClick}
						/>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default SubcategoriesComponent;
