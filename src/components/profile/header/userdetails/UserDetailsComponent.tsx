/**
 * @module UserDetailsComponent
 * @description A React component for displaying user details in a profile header.
 */

import React from 'react';

/**
 * A React component for displaying user details in a profile header.
 *
 * This component is responsible for rendering the user details within a profile header. It can be used to display information such as the user's name, profile picture, or any other relevant user details.
 *
 * @component
 * @returns {JSX.Element} - The rendered user details component.
 * @example
 * // Import and use the component within a profile header
 * <UserDetailsComponent />
 */
const UserDetailsComponent = (): JSX.Element => {
	return (
		<div className='profile__header_user-details'>
			<div className='profile__header_user-details-photo'></div>
			<div className='profile__header_user-details-user'>
				<div className='profile__header_user-details-name'>
					<p className='label'>Name:</p>
					<p className='field'> John Doe</p>
				</div>
				<div className='profile__header_user-details-email'>
					<p className='label'>e-mail:</p>
					<p className='field'> johndoe@example.com</p>
				</div>
			</div>
			<div className='profile__header_user-details-about'>
				<p className='label'>About me:</p>
				<p className='field'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Rerum quae modi recusandae assumenda sunt neque atque ipsum
					nostrum nesciunt corporis quidem aut blanditiis, sed ad at
					dolorem aliquid error voluptatem omnis illo eius. Ratione
					maiores cupiditate error voluptatibus, iste magnam, expedita
					fuga culpa ea possimus placeat eaque praesentium dolore.
					Doloremque.
				</p>
			</div>
		</div>
	);
};

export default UserDetailsComponent;
