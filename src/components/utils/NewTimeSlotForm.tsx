import TimeSlot from '@components/utils/TimeSlot';
import { zodResolver } from '@hookform/resolvers/zod';
import '@layouts/FormLayout.css';
import { TimeSlotData } from '@utils/formData';
import { timeSlot } from '@utils/formSchemas';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from './buttons/Button';

const NewTimeSlotForm: React.FC = () => {
	const { register } = useForm<TimeSlotData>({
		resolver: zodResolver(timeSlot),
	});

	const [formData, setFormData] = useState<TimeSlotData>({
		date: '',
		time: '',
		place: 'Online',
		title: '',
	});

	const [submittedData, setSubmittedData] = useState<TimeSlotData[]>([]);
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
			time: '',
			place: '',
			title: '',
		});
	};

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
							type='date'
							name='date'
							value={formData.date}
							onChange={handleInputChange}
						/>
					</div>
					<div className='form-element'>
						<label className='form-element__label'>Time:</label>
						<input
							className='form-element__input'
							{...register('time')}
							type='time'
							name='time'
							step='3600'
							value={formData.time}
							onChange={handleInputChange}
						/>
					</div>
					<div className='form-element'>
						<label className='form-element__label'>Place:</label>
						<select
							className='form-element__input'
							{...register('place')}
							name='place'
							value={formData.place}
							onChange={handleInputChange}>
							<option value='Online'>Online</option>
							<option value='Stationary'>Stationary</option>
						</select>
					</div>
					<div className='form-element'>
						<label className='form-element__label'>Title:</label>
						<input
							className='form-element__input'
							{...register('title')}
							type='text'
							name='title'
							value={formData.title}
							onChange={handleInputChange}
						/>
					</div>
					<button
						className='action-button'
						type='submit'>
						Submit
					</button>
				</form>
			) : (
				<div>
					{submittedData.map((data, index) => (
						<TimeSlot
							key={index}
							date={data.date}
							time={data.time}
							place={data.place}
							title={data.title}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default NewTimeSlotForm;
