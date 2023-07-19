import IconComponent from '@components/navbar/badge/icon/Icon.tsx';
import TextComponent from '@components/navbar/badge/text/Text.tsx';

import React from 'react';

interface BadgeProps {
	text?: string;
	source?: string;
}

const BadgeComponent = ({ text, source }: BadgeProps): JSX.Element => {
	return (
		<div className='nav__link-badge mx-2 my-auto flex h-10 w-fit gap-2 rounded-lg bg-green-700 px-2 text-white shadow-md transition-all duration-500 ease-in-out hover:bg-green-500 hover:shadow-inner'>
			{source ? <IconComponent source={source} /> : null}
			{text ? <TextComponent text={text} /> : null}
		</div>
	);
};

export default BadgeComponent;
