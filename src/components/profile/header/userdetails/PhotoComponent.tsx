/**
 * @module PhotoComponent
 * @description Module rendering component with user picture.
 */

import { getUserPhoto } from '@middleware/userHandler';
import React, { useEffect, useState } from 'react';
import PhotoUploaderComponent from './PhotoUploaderComponent';

/**
 * PhotoComponent - Component for displaying user's profile photo.
 *
 * This component is responsible for displaying the user's profile photo.
 * It fetches the user's photo from the server and displays it. If the user
 * does not have a profile photo, a default placeholder is shown. Users can
 * also upload or change their profile photo using the `PhotoUploaderComponent`.
 *
 * @component
 * @returns {JSX.Element} - Returns a component for displaying and managing the user's profile photo.
 * @example
 * // Importing the component
 * import PhotoComponent from './PhotoComponent';
 *
 * // Using the component within another component
 * <PhotoComponent />
 */

const PhotoComponent = (): JSX.Element => {
	const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

	useEffect(() => {
		const fetchUserPhoto = async () => {
			const photoFile = await getUserPhoto();
			if (photoFile) {
				setProfilePhoto(photoFile);
			}
		};
		fetchUserPhoto();
	}, []);

	return (
		<>
			{profilePhoto ? (
				<div
					className='profile__header_user-details-photo'
					style={{
						backgroundImage: `url(${URL.createObjectURL(
							profilePhoto,
						)})`,
					}}></div>
			) : (
				<div className='profile__header_user-details-photo'></div>
			)}
			<PhotoUploaderComponent
				setProfilePhoto={setProfilePhoto}
				profilePhoto={profilePhoto}
			/>
		</>
	);
};

export default PhotoComponent;
