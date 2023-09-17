import React from 'react';
import './ContractorCard.css'; // Dodaj stylizację

const ContractorCard = ({ contractor }) => {
	return (
		<div className='contractor-card'>
			<img
				src={contractor.imageUrl} // Dodaj pole imageUrl do danych kontraktora
				alt={`Avatar użytkownika ${contractor.userName}`}
				className='avatar'
			/>
			<div className='username'>{contractor.userName}</div>
		</div>
	);
};

export default ContractorCard;

