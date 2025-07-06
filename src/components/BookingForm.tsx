'use client';

import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, Input, Textarea, NativeSelect, Field } from '@chakra-ui/react';
import type { BookingFormData } from '@/types';
import { isThursday, isFriday, isSaturday, parse, format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { db } from '@/services/firebase';
import { ref, onValue } from 'firebase/database';

interface BookingFormProps {
	onSubmit: (data: BookingFormData) => void;
}

const isBookingDay = (date: Date) => isThursday(date) || isFriday(date) || isSaturday(date);

const getTimeOptions = (date: Date | null): string[] => {
	if (!date) return [];

	const generateTimeSlots = (startHour: number, startMinute: number, endHour: number, endMinute: number): string[] => {
		const times: string[] = [];
		const current = new Date();
		current.setHours(startHour, startMinute, 0, 0);

		const end = new Date();
		end.setHours(endHour, endMinute, 0, 0);

		// Handle midnight wrap
		if (end <= current) {
			end.setDate(end.getDate() + 1);
		}

		while (current <= end) {
			const hours = current.getHours().toString().padStart(2, '0');
			const minutes = current.getMinutes().toString().padStart(2, '0');
			times.push(`${hours}:${minutes}`);
			current.setMinutes(current.getMinutes() + 30);
		}

		return times;
	};

	if (isThursday(date) || isSaturday(date)) {
		return generateTimeSlots(21, 30, 23, 0);
	}

	if (isFriday(date)) {
		return generateTimeSlots(17, 0, 0, 0);
	}

	return [];
};

const BookingForm = ({ onSubmit }: BookingFormProps) => {
	const [formData, setFormData] = useState<BookingFormData>({
		name: '',
		phone: '',
		service: '',
		date: '',
		time: '',
		notes: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [takenTimes, setTakenTimes] = useState<string[]>([]);

	useEffect(() => {
		if (!selectedDate) return;

		const formattedDate = selectedDate.toLocaleDateString('en-CA'); // e.g. '2025-07-03'

		const bookingsRef = ref(db, 'bookings');
		onValue(bookingsRef, (snapshot) => {
			const data = snapshot.val();
			const times: string[] = [];

			for (const key in data) {
				const booking = data[key];

				if (booking.date === formattedDate && (booking.status === 'pending' || booking.status === 'confirmed')) {
					times.push(booking.time);
				}
			}

			setTakenTimes(times);
			console.log('taken:', times);
		});
	}, [selectedDate]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleDateChange = (date: Date | null) => {
		if (date) {
			setSelectedDate(date);
			setFormData((prev) => ({
				...prev,
				date: date ? format(date, 'yyyy-MM-dd') : '',
			}));
		} else {
			setFormData((prev) => ({ ...prev, date: '' }));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		console.log('form data', formData);
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			onSubmit(formData);
			setFormData({ name: '',  phone: '', service: '', date: '', time: '', notes: '' });
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
							border='1px solid'
							borderColor='primary.200'
							borderRadius='10px'
							_focus={{ borderColor: 'primary.500', bg: 'white', boxShadow: '0 0 0 3px rgba(212, 165, 165, 0.1)' }}
						>
							<option value=''>Select a service</option>
							<option value='Lash Lifts'>Lash Lifts</option>
							<option value='Lash Tinting'>Lash Tinting</option>
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
							border='1px solid'
							borderColor='primary.200'
							borderRadius='10px'
							_focus={{
								borderColor: 'primary.500',
								bg: 'white',
								boxShadow: '0 0 0 3px rgba(212, 165, 165, 0.1)',
							}}
						>
							<option value=''>Select time</option>
							{getTimeOptions(selectedDate).map((time) => {
								const isTaken = takenTimes.includes(time);
								let isPast = false;

								if (selectedDate) {
									const now = new Date();
									const selected = new Date(selectedDate);
									const selectedYMD = selected.toLocaleDateString('en-CA');
									const nowYMD = now.toLocaleDateString('en-CA');

									if (selectedYMD === nowYMD) {
										const [hour, minute] = time.split(':').map(Number);
										const slotTime = new Date();
										slotTime.setHours(hour, minute, 0, 0);

										if (slotTime <= now) {
											isPast = true;
										}
									}
								}

								if (isPast) return null;

								const label = format(parse(time, 'HH:mm', new Date()), 'h:mm a');

								return (
									<option
										key={time}
										value={time}
										disabled={isTaken}
									>
										{label} {isTaken ? '(Unavailable)' : ''}
									</option>
								);
							})}
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
