import React from 'react';

type TextProp = {
	message: string;
};

const SplitText: React.FC<TextProp> = ({ message }) => {
	return <div className='divider__divider-text'>{message}</div>;
};

export default SplitText;
