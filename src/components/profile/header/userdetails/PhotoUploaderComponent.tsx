/**
 * @module PhotoUploaderComponent
 * @description Module rendering component with user picture loader.
 */

import { uploadPhoto } from '@middleware/userHandler';
import 'filepond/dist/filepond.min.css';
import React, { useState } from 'react';

/**
 * Props for the PhotoUploaderComponent.
 */
interface UploaderProps {
	/**
	 * The currently displayed picture.
	 */
	profilePhoto: File | null;
	/**
	 * A function to set current picture.
	 *
	 * @param {File} file - The file to upload as profile picture.
	 */
	setProfilePhoto: (file: File) => void;
}

/**
 * PhotoUploaderComponent - Component for uploading and managing user profile photos.
 *
 * This component is responsible for enabling users to upload and manage their profile photos.
 * It provides a file input field for selecting a profile photo, an upload button to save the selected
 * photo as a new profile picture, and error handling for failed uploads. The selected photo is passed
 * to this component as a `profilePhoto` prop, and the new photo can be set using the `setProfilePhoto` prop.
 *
 * @component
 * @param {object} props - Props for the PhotoUploaderComponent.
 * @param {File | null} props.profilePhoto - The currently selected profile photo.
 * @param {(file: File) => void} props.setProfilePhoto - A function to set the new profile photo.
 * @returns {JSX.Element} - Returns a component for uploading and managing user profile photos.
 * @example
 * // Importing the component
 * import PhotoUploaderComponent from './PhotoUploaderComponent';
 *
 * // Using the component within another component
 * <PhotoUploaderComponent
 *   profilePhoto={currentProfilePhoto}
 *   setProfilePhoto={handleSetProfilePhoto}
 * />
 */

const PhotoUploaderComponent = ({
	profilePhoto,
	setProfilePhoto,
}: UploaderProps): JSX.Element => {
	const [error, setError] = useState('');
	const [isButtonVisible, setIsButtonVisible] = useState(false);

	const toggleVisibility = () => {
		setIsButtonVisible(!isButtonVisible);
	};

	const handlePictureChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		if (event.target.files && event.target.files[0]) {
			setProfilePhoto(event.target.files[0]);
			toggleVisibility();
		}
	};

	const handleUpload = async () => {
		const form = new FormData();
		if (profilePhoto) {
			form.append('profilePicture', profilePhoto);
		}
		const isUploaded = await uploadPhoto(form);
		if (!isUploaded) {
			setError('Picture upload failed. Change its size or format.');
		}
		toggleVisibility();
	};

	return (
		<div className='profile__header_user-details-photo-uploader'>
			<input
				type='file'
				onChange={handlePictureChange}
			/>
			{isButtonVisible ? (
				<button
					className='pill-button'
					onClick={handleUpload}>
					Save as new profile picture
				</button>
			) : null}
			{error ? <span>{error}</span> : null}
		</div>
	);
};

export default PhotoUploaderComponent;
