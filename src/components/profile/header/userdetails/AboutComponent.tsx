import React, { useEffect, useState } from 'react';

const AboutComponent: React.FC = () => {
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
				/>
			) : (
				<div
					className='field'
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					{description}
				</div>
			)}
		</div>
	);
};

export default AboutComponent;
