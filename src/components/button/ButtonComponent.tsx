import ButtonIconComponent from './icon/ButtonIconComponent.tsx';
import ButtonTextComponent from './text/ButtonTextComponent.tsx';

import React from 'react';

interface BadgeProps {
	text?: string;
	source?: string;
}

const ButtonComponent = ({ text, source }: BadgeProps): JSX.Element => {
	return (
		<div className='nav__link-badge mx-2 my-auto flex h-10 w-fit gap-2 rounded-lg bg-green-700 px-2 text-white shadow-md transition-all duration-500 ease-in-out hover:bg-green-500 hover:shadow-inner'>
			{source && <ButtonIconComponent source={source} />}
			{text && <ButtonTextComponent text={text} />}
		</div>
	);
};

export default ButtonComponent;
