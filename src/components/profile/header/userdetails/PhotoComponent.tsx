import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import React, { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const PhotoComponent: React.FC = () => {
	const [profilePhoto, setProfilePhoto] = useState<File[]>([]);

	const filePondOptions = {
		allowMultiple: false,
		server: '',
		acceptedFileTypes: ['image/jpeg', 'image/jpg', 'image/bmp'],
		maxFileSize: '1MB',
		labelIdle:
			'Drag & Drop your photo or <span class="filepond--label-action">Browse</span>',
	};

	const handleUpload = (files: any[]) => {
		setProfilePhoto(files);
	};

	return (
		<div className='profile__header_user-details-photo'>
			<FilePond
				files={profilePhoto}
				onupdatefiles={handleUpload}
				name='files'
				{...filePondOptions}
			/>
		</div>
	);
};

export default PhotoComponent;
