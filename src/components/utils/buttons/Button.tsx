import React from 'react';
import './Button.css';

interface ButtonProps {
	text: string;
	onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps): JSX.Element => {
	return (
		<button
			className='action-button'
			onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
