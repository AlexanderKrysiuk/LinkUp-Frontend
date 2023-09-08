import { zodResolver } from '@hookform/resolvers/zod';
import '@layouts/FormLayout.css';
import { submitFormData } from '@middleware/formHandler';
import { convertToMeetingData } from '@middleware/helpers/dataConverter';
import {
	calculateMinTime,
	validateDayTime,
} from '@middleware/helpers/dateTimeHelper';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { NewMeetingData } from '../../data/formData';
import { newMeetingSchema } from '../../data/formSchemas';

var errorMessage: string | number | undefined;

function NewMeetingForm() {
	const [refTime, setRefTime] = useState<string>();
	const [isTimeInvalid, setIsTimeInvalid] = useState<boolean>();
	const [refDay, setRefDay] = useState<number>();

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewMeetingData>({
		resolver: zodResolver(newMeetingSchema),
	});

	const addMeeting = async (data: NewMeetingData) => {
		const newMeetingData = convertToMeetingData(data);

		const token = localStorage.getItem('token');

		const { success, error } = await submitFormData(
			newMeetingData,
			'post',
			'addMeeting',
			token,
		);

		if (success) {
			navigate('/', { replace: true });
		} else {
			// Obsługa błędów
			console.error(error, 'This is madness!');
			errorMessage = error;
		}
	};

	const currentDateTime: Date = new Date();

	const setMinTimeReference = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedDate: string = e.target.value;
		const selectedDay: number = parseInt(selectedDate.slice(8, 10));
		setRefDay(selectedDay);

		const timeCheck: string = calculateMinTime(
			selectedDate,
			currentDateTime,
		);

		setRefTime(timeCheck);
	};

	const validateTime = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedTime: string = e.target.value;
		const isTimeInvalid = validateDayTime(
			selectedTime,
			currentDateTime,
			refDay,
		);
		setIsTimeInvalid(isTimeInvalid);
	};
	const timeErr: string = `You need to choose time not earlier than ${currentDateTime
		.toTimeString()
		.slice(0, 5)}`;

	return (
		<form
			className='form-component'
			onSubmit={handleSubmit(addMeeting)}>
			<div className='form-element'>
				<label className='form-element__label'>Date:</label>
				<input
					className='form-element__input'
					{...register('date')}
					type='date'
					id='date'
					min={currentDateTime.toISOString().slice(0, 10)}
					onChange={setMinTimeReference}
				/>
				{errors.date && (
					<span className='form-element__validation-prompt'>
						{errors.date.message}
					</span>
				)}
				{errorMessage && (
					<span className='form-element__validation-prompt'>
						{errorMessage}
					</span>
				)}
			</div>
			<div className='form-element'>
				<label className='form-element__label'>Time:</label>
				<input
					className='form-element__input'
					{...register('time')}
					type='time'
					id='time'
					min={refTime}
					onChange={validateTime}
				/>
				{errors.time && (
					<span className='form-element__validation-prompt'>
						{errors.time.message}
					</span>
				)}
				{isTimeInvalid && (
					<span className='form-element__validation-prompt'>
						{timeErr}
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
