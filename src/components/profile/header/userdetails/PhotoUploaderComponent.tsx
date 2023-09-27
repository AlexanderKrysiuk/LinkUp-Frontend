import { uploadPhoto } from '@middleware/userHandler';
import 'filepond/dist/filepond.min.css';
import React, { useState } from 'react';

interface UploaderProps {
	profilePhoto: File | null;
	setProfilePhoto: (file: File) => void;
}

const PhotoUploaderComponent: React.FC<UploaderProps> = ({
	profilePhoto,
	setProfilePhoto,
}: UploaderProps) => {
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
