import PillComponent from '@components/utils/buttons/PillComponent.tsx';
import { ProfileMenuItem, SubmenuItem } from '@router/ProfileMenuItems.ts';

import React from 'react';

import { NavLink } from 'react-router-dom';

interface SubcategoriesComponentProps {
	selectedCategory: ProfileMenuItem;
	clickHandler: (text: string) => void;
}

const SubcategoriesComponent = ({
	selectedCategory,
	clickHandler,
}: SubcategoriesComponentProps): JSX.Element => {
	return (
		<ul>
			{selectedCategory.subMenu.map((subItem: SubmenuItem) => (
				<li key={subItem.routeName}>
					<NavLink
						to={`/profile/${selectedCategory.routeName}/${subItem.routeName}`}>
						<PillComponent
							item={subItem.routeName}
							onClick={clickHandler}
						/>
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export default SubcategoriesComponent;
