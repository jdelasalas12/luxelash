'use client';

import React, { useState } from 'react';
import { Box, Button, Stack, Input, Textarea, NativeSelect, Field } from '@chakra-ui/react';
import type { BookingFormData } from '@/types';
import { isThursday, isFriday, parse, format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface BookingFormProps {
	onSubmit: (data: BookingFormData) => void;
}

const isBookingDay = (date: Date) => isThursday(date) || isFriday(date);

const getTimeOptions = (date: Date | undefined) => {
	if (!date) return [];
	if (isThursday(date)) {
		return ['22:00', '22:30', '23:00', '23:30', '00:00', '00:30'];
	}
	if (isFriday(date)) {
		return ['15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00', '00:30'];
	}
	return [];
};

const BookingForm = ({ onSubmit }: BookingFormProps) => {
	const [formData, setFormData] = useState<BookingFormData>({
		name: '',
		email: '',
		phone: '',
		service: '',
		date: '',
		time: '',
		notes: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
		setFormData((prev) => ({ ...prev, date: date ? date.toISOString().split('T')[0] : '' }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setIsSubmitting(true);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			onSubmit(formData);
			setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', notes: '' });
			setSelectedDate(null);
		} catch (error) {
			console.log('error', error);
		} finally {
			setIsSubmitting(false);
		}
	};
	return (
		<Box
			as='form'
			onSubmit={handleSubmit}
			w='100%'
		>
			<Stack gap={6}>
				<Field.Root>
					<Field.Label>Full Name</Field.Label>
					<Input
						name='name'
						value={formData.name}
						onChange={handleChange}
						bg='secondary.100'
						border='1px solid'
						borderColor='primary.200'
						borderRadius='10px'
						_focus={{ borderColor: 'primary.500', bg: 'white', boxShadow: '0 0 0 3px rgba(212, 165, 165, 0.1)' }}
					/>
				</Field.Root>

				<Field.Root>
					<Field.Label>Email Address</Field.Label>
					<Input
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						bg='secondary.100'
						border='1px solid'
						borderColor='primary.200'
						borderRadius='10px'
						_focus={{ borderColor: 'primary.500', bg: 'white', boxShadow: '0 0 0 3px rgba(212, 165, 165, 0.1)' }}
					/>
				</Field.Root>

				<Field.Root>
					<Field.Label>Phone Number</Field.Label>
					<Input
						type='tel'
						name='phone'
						value={formData.phone}
						onChange={handleChange}
						bg='secondary.100'
						border='1px solid'
						borderColor='primary.200'
						borderRadius='10px'
						_focus={{ borderColor: 'primary.500', bg: 'white', boxShadow: '0 0 0 3px rgba(212, 165, 165, 0.1)' }}
					/>
				</Field.Root>

				<Field.Root>
					<Field.Label>Service</Field.Label>
					<NativeSelect.Root>
						<NativeSelect.Field
							name='service'
							value={formData.service}
							onChange={handleChange}
							placeholder='Select a service'
							bg='secondary.100'
							border='1px solid'
							borderColor='primary.200'
							borderRadius='10px'
							_focus={{ borderColor: 'primary.500', bg: 'white', boxShadow: '0 0 0 3px rgba(212, 165, 165, 0.1)' }}
						>
							<option value='Eyelash Extensions'>Eyelash Extensions</option>
							<option value='Lash Lifts'>Lash Lifts </option>
							<option value='Lash Tinting'>Lash Tinting</option>
							<option value='Full Lash Package'>Full Lash Package</option>
						</NativeSelect.Field>
						<NativeSelect.Indicator />
					</NativeSelect.Root>
				</Field.Root>

				<Field.Root>
					<Field.Label>Preferred Date</Field.Label>
					<DatePicker
						selected={selectedDate}
						onChange={handleDateChange}
						filterDate={isBookingDay}
						minDate={new Date()}
						dateFormat='MMMM dd, yyyy'
						placeholderText='Select a date'
						className='chakra_custom-input'
						wrapperClassName=''
					/>
				</Field.Root>

				<Field.Root>
					<Field.Label>Preferred Time</Field.Label>
					<NativeSelect.Root>
						<NativeSelect.Field
							name='time'
							value={formData.time}
							onChange={handleChange}
							placeholder='Select time'
							bg='secondary.100'
							border='1px solid'
							borderColor='primary.200'
							borderRadius='10px'
							_focus={{ borderColor: 'primary.500', bg: 'white', boxShadow: '0 0 0 3px rgba(212, 165, 165, 0.1)' }}
						>
							{getTimeOptions(selectedDate ?? undefined).map((time) => (
								<option
									key={time}
									value={time}
								>
									{format(parse(time, 'HH:mm', new Date()), 'h:mm a')}
								</option>
							))}
						</NativeSelect.Field>
						<NativeSelect.Indicator />
					</NativeSelect.Root>
				</Field.Root>

				<Field.Root>
					<Field.Label>Special Requests or Notes</Field.Label>
					<Textarea
						name='notes'
						value={formData.notes}
						onChange={handleChange}
						placeholder='Any allergies, preferences, or special requests...'
						bg='secondary.100'
						border='1px solid'
						borderColor='primary.200'
						borderRadius='10px'
						_focus={{ borderColor: 'primary.500', bg: 'white', boxShadow: '0 0 0 3px rgba(212, 165, 165, 0.1)' }}
					/>
				</Field.Root>

				<Button
					type='submit'
					bg='linear-gradient(135deg, #d4a5a5, #f5e6d3)'
					color='white'
					size='lg'
					width='full'
					loading={isSubmitting}
					loadingText='Submitting...'
					borderRadius='10px'
					_hover={{ transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(232, 180, 184, 0.4)' }}
				>
					Book My Appointment
				</Button>
			</Stack>
		</Box>
	);
};

export default BookingForm;
