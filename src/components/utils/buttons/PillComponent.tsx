import React from 'react';
import './PillComponent.css';

const PillComponent = ({
	text,
	onClick,
}: {
	text: string;
	onClick?: (params: any) => void;
}) => {
	return (
		<button
			className='pill-button'
			onClick={onClick}>
			{text}
		</button>
	);
};

export default PillComponent;
