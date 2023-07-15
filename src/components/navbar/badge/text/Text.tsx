import React from 'react';

interface TextProps {
	text: string;
}

const TextComponent = ({ text }: TextProps): JSX.Element => {
	return <p className='navbar__badge-text my-auto'>{text}</p>;
};

export default TextComponent;
