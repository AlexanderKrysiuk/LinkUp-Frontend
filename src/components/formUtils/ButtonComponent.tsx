import React from 'react';

type TextProp = {
	text: string;
};

const ButtonComponent: React.FC<TextProp> = ({ text }) => {
	return (
		<div className='button'>
			<button className='google-button'>{`${text}`} with Google</button>
		</div>
	);
};

export default ButtonComponent;
