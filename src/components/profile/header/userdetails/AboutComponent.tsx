/**
 * @module AboutComponent
 * @description Module rendering component with user data.
 */

import React, { useEffect, useState } from 'react';

/**
 * AboutComponent - Component for displaying and editing user description.
 *
 * This component is responsible for displaying and editing the user's description.
 * Users can edit their description by hovering over it and clicking on it. The description
 * is stored in local storage and can be up to 100 characters long.
 *
 * @component
 * @returns {JSX.Element} - Returns a component for displaying and editing the user's description.
 * @example
 * // Importing the component
 * import AboutComponent from './AboutComponent';
 *
 * // Using the component within another component
 * <AboutComponent />
 */

const AboutComponent = (): JSX.Element => {
	const [isEditing, setIsEditing] = useState(false);
	const [description, setDescription] = useState('');

	useEffect(() => {
		const storedDescription = localStorage.getItem('userDescription');
		if (storedDescription) {
			setDescription(storedDescription);
		} else {
			setDescription('Max. 100 characters.');
		}
	}, []);

	const handleMouseEnter = () => {
		if (!isEditing) {
			setIsEditing(true);
		}
	};

	const handleMouseLeave = () => {
		if (isEditing) {
			setIsEditing(false);
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(event.target.value);
	};

	const handleInputBlur = () => {
		setIsEditing(false);
		localStorage.setItem('userDescription', description);
	};

	return (
		<div className='profile-page'>
			{isEditing ? (
				<input
					type='text'
					maxLength={100}
					value={description}
					onChange={handleInputChange}
					onBlur={handleInputBlur}
					onMouseLeave={handleMouseLeave}
				/>
			) : (
				<div
					className='field'
					onMouseEnter={handleMouseEnter}>
					{description}
				</div>
			)}
		</div>
	);
};

export default AboutComponent;
