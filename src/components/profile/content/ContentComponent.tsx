/**
 * @module ContentComponent
 * @description Module containing the content component for dynamic routing.
 */

import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Component for rendering dynamic content.
 *
 * This component serves as a container for dynamic content that depends on the
 * current route. It utilizes the `Outlet` component from React Router to display
 * the content based on the active route.
 *
 * @component
 * @returns {JSX.Element} - The rendered content component.
 * @example
 * ```tsx
 * <ContentComponent />
 * ```
 */
const ContentComponent = (): JSX.Element => {
	return (
		<div className='profile__content'>
			<Outlet />
		</div>
	);
};

export default ContentComponent;
