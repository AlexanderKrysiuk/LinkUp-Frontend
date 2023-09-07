/**
 * @module ButtonIconComponent
 * @description Component for rendering an icon inside a button.
 */

import React from 'react';

/**
 * Props for the `ButtonIconComponent`.
 *
 * @typedef {Object} IconProps
 * @property {string} [source] - The path to the icon source file.
 */
interface IconProps {
	/**
	 * The path to the icon source file.
	 */
	source?: string;
}
/**
 * Component for rendering an icon inside a button.
 *
 * This component represents an icon rendered inside a button element. It takes a
 * `source` prop, which should be the path to the icon source file.
 *
 * @component
 * @param {IconProps} props - The component props.
 * @param {string} [props.source] - The path to the icon source file.
 * @returns {JSX.Element} - The rendered icon component.
 * @example
 * // Import and use the component with an icon source
 * <ButtonIconComponent source="/path-to-icon.svg" />
 *
 * // Import and use the component without specifying an icon source
 * <ButtonIconComponent />
 */

const ButtonIconComponent = ({
	source = undefined,
}: IconProps): JSX.Element => {
	return (
		<img
			src={source}
			className='navbar__badge-icon'
			alt='Button Icon'
		/>
	);
};

export default ButtonIconComponent;
