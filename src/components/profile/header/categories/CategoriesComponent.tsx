import PillComponent from '@components/utils/buttons/PillComponent.tsx';
import React from 'react';

import { NavLink } from 'react-router-dom';

import routes, { ProfileMenuItem } from '@router/ProfileMenuItems.ts';

interface CategoriesComponentProps {
	clickHandler: (category: ProfileMenuItem) => void;
}

const CategoriesComponent = ({
	clickHandler,
}: CategoriesComponentProps): JSX.Element => {
	return (
		<ul className='profile__header_categories'>
			<li>
				{routes.map((item, index) => (
					<NavLink
						to={item.routeName}
						key={index}>
						<PillComponent
							key={index}
							item={item}
							onClick={clickHandler}
						/>
					</NavLink>
				))}
			</li>
		</ul>
	);
};

export default CategoriesComponent;
