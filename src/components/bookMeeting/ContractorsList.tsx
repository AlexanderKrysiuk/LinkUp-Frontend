import { getContractors } from '@middleware/apiHandler';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ContractorCard from './ContractorCard'; // Importuj komponent ContractorCard
import './ContractorsList.css'; // Dodaj stylizację dla listy kontraktorów
interface contractorListProps {
	setContractorEmail: Dispatch<SetStateAction<string>>;
}

const ContractorsList = ({ setContractorEmail }: contractorListProps) => {
	const [contractors, setContractors] = useState([]);

	useEffect(() => {
		// Pobierz dane kontraktorów z endpointu GET
		//fetch(API_CONTRACTORS)
		getContractors()
			.then((response) => {
				// Sprawdź, czy odpowiedź jest udana (status 200)
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				// Parsuj odpowiedź do formatu JSON
				return response.json();
			})
			.then((data) => {
				// Ustaw dane z odpowiedzi w stanie komponentu
				setContractors(data);
			})
			.catch((error) => {
				console.error('Błąd podczas pobierania danych:', error);
			});
	}, []);

	return (
		<div className='contractors-list'>
			{contractors.map((contractor, index) => (
				<ContractorCard
					setContractorEmail={setContractorEmail}
					key={index}
					contractor={contractor}
				/>
			))}
		</div>
	);
};

export default ContractorsList;

