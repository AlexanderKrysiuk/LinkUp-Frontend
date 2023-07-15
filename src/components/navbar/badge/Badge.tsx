import React from 'react';
import IconComponent from '../badge/icon/Icon.tsx';
import TextComponent from '../badge/text/Text.tsx';

interface BadgeProps {
	text: string;
	source?: string;
}

const BadgeComponent = ({ text, source }: BadgeProps): JSX.Element => {
	return (
		<div className='nav__link-badge mx-2my-auto flex h-10 w-fit gap-2 rounded-md bg-green-700 px-2 shadow-md transition-all duration-500 ease-in-out hover:bg-green-500 hover:shadow-inner'>
			<IconComponent source={source} />
			<TextComponent text={text} />
		</div>
	);
};

export default BadgeComponent;
