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
			className='navbar__badge-icon'
		/>
	);
};
export default ButtonIconComponent;
