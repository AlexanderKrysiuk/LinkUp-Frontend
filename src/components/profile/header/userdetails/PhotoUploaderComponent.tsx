import { uploadPhoto } from '@middleware/userHandler';
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

	const handlePictureChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		if (event.target.files && event.target.files[0]) {
			setProfilePhoto(event.target.files[0]);
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
	};

	return (
		<>
			<div>
				<input
					type='file'
					onChange={handlePictureChange}
				/>
				<button onClick={handleUpload}>Upload picture</button>
				{error ? <span>{error}</span> : null}
			</div>
		</>
	);
};

export default PhotoUploaderComponent;
