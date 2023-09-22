import { uploadPhoto } from '@middleware/userHandler';
import 'filepond/dist/filepond.min.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PhotoComponent: React.FC = () => {
	const [profilePhoto, setProfilePhoto] = useState(null);
	// const [isFilePondVisible, setIsFilePondVisible] = useState(false);
	const navigate = useNavigate();

	const handlePictureChange = (event: any) => {
		setProfilePhoto(event.target.files[0]);
	};

	const handleUpload = async () => {
		const form = new FormData();
		if (profilePhoto) {
			form.append('profilePicture', profilePhoto);
			console.log(profilePhoto);
		}
		const isUploaded = await uploadPhoto(form);
		if (isUploaded) {
			navigate('/profile/overview', { replace: true });
		} else {
			navigate('/contact', { replace: true });
		}
	};

	// const toggleVisibility = () => {
	// 	setIsFilePondVisible(!isFilePondVisible);
	// };

	return (
		<>
			<div className='profile__header_user-details-photo'>
				{profilePhoto ? null : (
					<>
						<input
							type='file'
							onChange={handlePictureChange}
						/>
						<div onClick={handleUpload}>Upload picture</div>
					</>
				)}
			</div>
			<div>
				<input
					type='file'
					onChange={handlePictureChange}
				/>
				<button onClick={handleUpload}>Upload picture</button>
			</div>
			{/* <button
				className='profile__header_user-details-photo-button'
				onClick={toggleVisibility}>
				Update photo
			</button> */}
			{/* {isFilePondVisible ? (
				<FilePond
					files={profilePhoto}
					onupdatefiles={handleUpload}
					name='profilePicture'
					{...filePondOptions}
				/>
			) : null} */}
		</>
	);
};

export default PhotoComponent;
