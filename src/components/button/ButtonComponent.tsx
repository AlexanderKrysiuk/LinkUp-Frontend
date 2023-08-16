import ButtonIconComponent from './icon/ButtonIconComponent.tsx';
import ButtonTextComponent from './text/ButtonTextComponent.tsx';

import React from 'react';

interface BadgeProps {
	text?: string;
	source?: string;
}

const ButtonComponent = ({ text, source }: BadgeProps): JSX.Element => {
	return (
		<div className='nav__link-badge'>
			{source && <ButtonIconComponent source={source} />}
			{text && <ButtonTextComponent text={text} />}
		</div>
	);
};

export default ButtonComponent;
