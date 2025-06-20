import React, { useEffect, useState } from 'react';
import { Box, Button, Table, Heading, Badge, Spinner, Center } from '@chakra-ui/react';

import { Booking } from '@/types';
import { toaster, Toaster } from '@/components/ui/toaster';
import { db, auth } from '@/services/firebase';

import { ref, onValue, update } from 'firebase/database';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

const AdminBookings = () => {
	const [bookings, setBookings] = useState<Booking[]>([]);
	const [isAuth, setIsAuth] = useState<boolean | null>(null);
	const router = useRouter();

	useEffect(() => {
		const bookingsRef = ref(db, 'bookings');
		onValue(bookingsRef, (snapshot) => {
			const data = snapshot.val();
			const list: Booking[] = [];
			for (const id in data) {
				list.push({ id, ...data[id] });
			}
			setBookings(list.sort((a, b) => b.createdAt - a.createdAt));
		});
	}, []);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (!user) {
				router.replace('/admin/login');
			} else {
				setIsAuth(true);
			}
		});
		return () => unsubscribe();
	}, [router]);

	if (isAuth === null) {
		return (
			<Center minH='100vh'>
				<Spinner
					size='xl'
					color='primary.500'
					borderWidth='4px'
					animationDuration='0.65s'
				/>
			</Center>
		);
	}

	const handleUpdateStatus = async (id: string, newStatus: 'confirmed' | 'cancelled') => {
		try {
			await update(ref(db, `bookings/${id}`), { status: newStatus });
			toaster.create({
				title: `Booking ${newStatus}`,
				type: 'success',
				duration: 3000,
				closable: true,
			});
		} catch (error) {
			console.log('error', error);
			toaster.create({
				title: 'Error updating status',
				type: 'error',
				duration: 3000,
				closable: true,
			});
		}
	};

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'confirmed':
				return 'green';
			case 'cancelled':
				return 'red';
			default:
				return 'purple';
		}
	};

	const handleLogout = async () => {
		await signOut(auth);
		router.replace('/admin/login');
	};

	return (
		<Box p={8}>
			<Heading
				size='2xl'
				mb={6}
			>
				Bookings Admin Panel
			</Heading>
			<Toaster />
			<Table.Root
				size='md'
				interactive
				stickyHeader
			>
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeader>Name</Table.ColumnHeader>
						<Table.ColumnHeader>Phone Number</Table.ColumnHeader>
						<Table.ColumnHeader>Booking Date</Table.ColumnHeader>
						<Table.ColumnHeader>Time</Table.ColumnHeader>
						<Table.ColumnHeader>Service</Table.ColumnHeader>
						<Table.ColumnHeader>Status</Table.ColumnHeader>
						<Table.ColumnHeader>Actions</Table.ColumnHeader>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{bookings.map((booking) => (
						<Table.Row key={booking.id}>
							<Table.Cell>{booking.name}</Table.Cell>
							<Table.Cell>{booking.phone}</Table.Cell>
							<Table.Cell>{booking.date}</Table.Cell>
							<Table.Cell>{booking.time}</Table.Cell>
							<Table.Cell>{booking.service}</Table.Cell>
							<Table.Cell>
								<Badge colorPalette={getStatusColor(booking.status)}>{booking.status}</Badge>
							</Table.Cell>
							<Table.Cell>
								<Button
									size='sm'
									colorPalette='green'
									mr={2}
									onClick={() => handleUpdateStatus(booking.id, 'confirmed')}
									disabled={booking.status === 'confirmed'}
								>
									Confirm
								</Button>
								<Button
									size='sm'
									colorPalette='gray'
									onClick={() => handleUpdateStatus(booking.id, 'cancelled')}
									disabled={booking.status === 'cancelled'}
								>
									Cancel
								</Button>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>

			<Box mt={4}>
				<Button
					colorPalette='teal'
					onClick={handleLogout}
				>
					Logout
				</Button>
			</Box>
		</Box>
	);
};

export default AdminBookings;
