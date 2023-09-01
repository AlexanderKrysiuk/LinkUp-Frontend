import Meeting from '@components/utils/Meeting.tsx';
import { zodResolver } from '@hookform/resolvers/zod';
import '@layouts/FormLayout.css';
import { NewMeetingData } from '@utils/formData';
import { newMeeting } from '@utils/formSchemas';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from './buttons/Button';

const NewTimeSlotForm: React.FC = () => {
	const { register } = useForm<NewMeetingData>({
		resolver: zodResolver(newMeeting),
	});

	const [formData, setFormData] = useState<NewMeetingData>({
		date: '',
		duration: 30,
		participants: 1,
		description: '',
	});

	const [submittedData, setSubmittedData] = useState<NewMeetingData[]>([]);
	const [showForm, setShowForm] = useState(false);

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setSubmittedData((prevList) => [...prevList, formData]);
		setShowForm(false);
		setFormData({
			date: '',
			duration: 30,
			participants: 1,
			description: '',
		});
	};

	var currentDate = new Date().toISOString().split('T')[0];

	return (
		<div>
			<Button
				text='+ Add meeting slot'
				onClick={() => setShowForm(!showForm)}
			/>

			{showForm ? (
				<form
					className='form-component'
					onSubmit={handleSubmit}>
					<div className='form-element'>
						<label className='form-element__label'>Date:</label>
						<input
							className='form-element__input'
							{...register('date')}
							type="date"
							name='date'
							min={currentDate}
							value={formData.date}
							onChange={handleInputChange}
						/>
					</div>
					<div className='form-element'>
						<label className='form-element__label'>Duration (min):</label>
						<input
							className='form-element__input'
							{...register('duration')}
							type='number'
							name='duration'
							step='30'
							min='30'
							value={formData.duration}
							onChange={handleInputChange}
						/>
					</div>
					<div className='form-element'>
						<label className='form-element__label'>Max participants:</label>
						<input
							className='form-element__input'
							{...register('participants')}
							type='number'
							name='participants'
							min='1'
							value={formData.participants}
							onChange={handleInputChange}
						/>
					</div>
					<div className='form-element'>
						<label className='form-element__label'>Description:</label>
						<input
							className='form-element__input'
							{...register('description')}
							type='text'
							name='description'
							value={formData.description}
							onChange={handleInputChange}
						/>
					</div>
					<button
						className='action-button'
						type='submit'>
						OK
					</button>
				</form>
			) : (
				<div>
					{submittedData.map((data, index) => (
						<Meeting
							key={index}
							date={data.date}
							description={data.description}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default NewTimeSlotForm;
