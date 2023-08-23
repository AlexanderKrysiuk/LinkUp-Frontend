import SplitLine from '@components/formUtils/SplitLine';
import SplitText from '@components/formUtils/SplitText';
import React from 'react';

type TextProp = {
	message: string;
};

const DividerComponent: React.FC<TextProp> = ({ message }) => {
	return (
		<div className='divider'>
			<SplitLine />
			<SplitText message={message} />
			<SplitLine />
		</div>
	);
};

export default DividerComponent;
