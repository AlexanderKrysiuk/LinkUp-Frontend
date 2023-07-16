import React from 'react';
// import "./Icon.css";

interface IconProps {
	source?: string;
}

const IconComponent = ({ source = undefined }: IconProps): JSX.Element => {
	return (
		<img
			src={source}
			className='navbar__badge-icon my-auto h-5/6 w-auto rounded-full '
		/>
	);
};
export default IconComponent;
