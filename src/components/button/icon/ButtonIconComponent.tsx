import React from 'react';

/**
 * Component for rendering an icon inside a button.
 *
 * This component represents an icon rendered inside a button element. It takes a
 * `source` prop, which should be the path to the icon source file.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.source - The path to the icon source file.
 * @returns {JSX.Element} - The rendered icon component.
 * @example
 * ```tsx
 * <ButtonIconComponent source='/path-to-icon.svg' />
 * ```
 */

/**
 * Props for the ButtonIconComponent.
 */
interface IconProps {
	/**
	 * The path to the icon source file.
	 */
	source?: string;
}

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
