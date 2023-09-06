import { ProfileMenuItem } from '@router/ProfileMenuItems.ts';
import React from 'react';

import './PillComponent.css';

interface PillComponentProps {
	item: string | ProfileMenuItem;
	onClick?:
		| (((text: string) => void) | ((obj: ProfileMenuItem) => void))
		| undefined;
}

const PillComponent = ({ item, onClick }: PillComponentProps): JSX.Element => {
	const checkItemIsString = typeof item === 'string';
	return (
		<button
			className='pill-button'
			onClick={
				!checkItemIsString
					? () => (onClick as (obj: ProfileMenuItem) => void)(item)
					: undefined
			}>
			{checkItemIsString ? item : item.routeName}
		</button>
	);
};

export default PillComponent;
