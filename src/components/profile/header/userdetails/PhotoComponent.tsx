import { getUserPhoto } from '@middleware/userHandler';
import React, { useEffect, useState } from 'react';
import PhotoUploaderComponent from './PhotoUploaderComponent';

const PhotoComponent: React.FC = () => {
	const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
	//const [profilePhotoUrl, setProfilePhotoUrl] = useState<File | null>(null);

	useEffect(() => {
		const fetchUserPhoto = async () => {
			const photoFile = await getUserPhoto();
			if (photoFile) {
				//resize photoFile
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
