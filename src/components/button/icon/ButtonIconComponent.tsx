import React from 'react';
// import "./Icon.css";

interface IconProps {
	source?: string;
}

const ButtonIconComponent = ({
	source = undefined,
}: IconProps): JSX.Element => {
	return (
		<img
			src={source}
			className='navbar__badge-icon my-auto h-5/6 w-auto invert hover:shadow-lg'
		/>
	);
};
export default ButtonIconComponent;
