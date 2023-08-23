import SplitLine from '@components/divider/SplitLine';
import SplitText from '@components/divider/SplitText';
import React from 'react';
type textProp = {
	message: string;
};

const DividerComponent: React.FC<textProp> = ({ message }) => {
	return (
		<div className='divider'>
			<SplitLine />
			<SplitText message={message} />
			<SplitLine />
		</div>
	);
};

export default DividerComponent;
