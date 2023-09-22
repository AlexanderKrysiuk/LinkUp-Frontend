import React, { useState } from 'react';
import PhotoUploaderComponent from './PhotoUploaderCOmponent';

const PhotoComponent: React.FC = () => {
	const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

	return (
		<>
			<div className='profile__header_user-details-photo'></div>
			<PhotoUploaderComponent
				setProfilePhoto={setProfilePhoto}
				profilePhoto={profilePhoto}
			/>
		</>
	);
};

export default PhotoComponent;
