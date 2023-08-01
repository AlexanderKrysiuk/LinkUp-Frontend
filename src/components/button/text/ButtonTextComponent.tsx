import React from 'react';

interface TextProps {
	text?: string;
}

const ButtonTextComponent = ({ text }: TextProps): JSX.Element => {
	return <p className='navbar__badge-text my-auto'>{text}</p>;
};

export default ButtonTextComponent;
