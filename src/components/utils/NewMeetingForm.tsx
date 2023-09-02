import { zodResolver } from '@hookform/resolvers/zod';
import '@layouts/FormLayout.css';
//import errorHandler from '@utils/errorHandler';
import apiHandler from '@utils/fetchApi';
import { NewMeetingData } from '@utils/formData';
import { newMeetingSchema } from '@utils/formSchemas';
import React from 'react';
import { useForm } from 'react-hook-form';

var errorMessage = '';

function NewMeetingForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewMeetingData>({
		resolver: zodResolver(newMeetingSchema),
	});

	const currentDateTime: Date = new Date();
	// const currentHour: number = parseInt(
	// 	currentDateTime.toISOString().slice(11, 13),
	// );
	// const currentMinutes: number = parseInt(
	// 	currentDateTime.toISOString().slice(14, 16),
	// );

	// const validateTime = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const selectedTime = e.target.value.slice(11, 16);
	// 	const selectedHour: number = parseInt(selectedTime.slice(0, 2));
	// 	const selectedMinutes: number = parseInt(selectedTime.slice(3, 5));

	// 	if(selectedHour< currentHour || (selectedHour==currentHour && selectedMinutes< currentMinutes))
	// 	{var dateError: string = "The time has passed."}
	// };

	const addMeeting = async (data: NewMeetingData) => {
		const newMeetingData = {
			datetime: data.datetime,
			duration: +data.duration,
			participants: +data.participants,
			description: data.description,
		};

		const apiUrl = '';
		console.log(newMeetingData);
		try {
			const response = await apiHandler.apiPost(apiUrl, newMeetingData);
			if (response.ok) {
				//do smth
				console.log('submitted', response);
			} else {
				//handle statuses
				errorMessage = `Error ${response.status}: ${response.statusText}`;
			}
		} catch (error) {
			//handle errors -> errorhandler.ts
			console.error('Error submitting form:', error);
		}
	};

	return (
		<form
			className='form-component'
			onSubmit={handleSubmit(addMeeting)}>
			<div className='form-element'>
				<label className='form-element__label'>Date:</label>
				<input
					className='form-element__input'
					{...register('datetime')}
					type='datetime-local'
					id='date'
					min={currentDateTime.toISOString().slice(0, 16)}
					//onChange={validateTime}
				/>
				{errors.datetime && (
					<span className='form-element__validation-prompt'>
						{errors.datetime.message}
					</span>
				)}
			</div>
			<div className='form-element'>
				<label className='form-element__label'>Duration (min):</label>
				<input
					className='form-element__input'
					type='number'
					id='duration'
					step='30'
					min='30'
					{...register('duration')}
				/>
				{errors.duration && (
					<span className='form-element__validation-prompt'>
						{errors.duration.message}
					</span>
				)}
			</div>
			<div className='form-element'>
				<label className='form-element__label'>Max participants:</label>
				<input
					className='form-element__input'
					type='number'
					id='participants'
					min='1'
					{...register('participants')}
				/>
				{errors.participants && (
					<span className='form-element__validation-prompt'>
						{errors.participants.message}
					</span>
				)}
			</div>
			<div className='form-element'>
				<label className='form-element__label'>Description:</label>
				<input
					className='form-element__input'
					type='text'
					id='description'
					{...register('description')}
				/>
				{errors.description && (
					<span className='form-element__validation-prompt'>
						{errors.description.message}
					</span>
				)}
			</div>

			<button
				className='action-button'
				type='submit'>
				OK
			</button>
		</form>
	);
}

export default NewMeetingForm;
