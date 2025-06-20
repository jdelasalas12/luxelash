'use client';

import type React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Card } from '@chakra-ui/react';
import BookingForm from './BookingFormOld';
import ThankYouModal from './ThankYouModal';
import { contactInfo } from '@/data';
import type { BookingFormData } from '@/types';
import { useState } from 'react';

const BookingSection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleBookingSubmit = (data: BookingFormData) => {
		console.log('Booking data:', data);
		setIsModalOpen(true);
	};

	return (
		<Box
			id='booking'
			py={20}
			bgGradient='to-br'
			gradientFrom='primary.500'
			gradientTo='secondary.500'
			color='white'
			position='relative'
		>
			<Box
				position='absolute'
				top={0}
				left={0}
				right={0}
				bottom={0}
				bgImage=''
				bgSize='cover'
				backgroundPosition='center'
				opacity={0.1}
			/>

			<Container
				maxW='1200px'
				position='relative'
				zIndex={2}
			>
				<SimpleGrid
					columns={{ base: 1, lg: 2 }}
					gap={16}
					alignItems='center'
				>
					<VStack
						gap={6}
						align='start'
						color='white'
					>
						<Heading
							as='h2'
							size='3xl'
							fontFamily='heading'
						>
							Ready to Transform Your Lashes?
						</Heading>

						<Text
							fontSize='lg'
							lineHeight='1.7'
						>
							Book your appointment today and discover the difference professional lash services can make. Our expert technicians are ready to create your perfect look.
						</Text>

						<VStack
							gap={4}
							align='start'
							mt={8}
						>
							<Box>
								<Text
									fontSize='xl'
									fontWeight='600'
									mb={2}
								>
									📍 Visit Us
								</Text>
								<Text whiteSpace='pre-line'>{contactInfo.address}</Text>
							</Box>

							<Box>
								<Text
									fontSize='xl'
									fontWeight='600'
									mb={2}
								>
									📞 Call Us
								</Text>
								<Text>{contactInfo.phone}</Text>
							</Box>

							<Box>
								<Text
									fontSize='xl'
									fontWeight='600'
									mb={2}
								>
									⏰ Hours
								</Text>
								<Text>{contactInfo.hours.weekdays}</Text>
								<Text>{contactInfo.hours.weekend}</Text>
							</Box>
						</VStack>
					</VStack>

					<Card.Root
						bg='white'
						p={8}
						borderRadius='20px'
						boxShadow='0 15px 35px rgba(0, 0, 0, 0.1)'
					>
						<Card.Body p={0}>
							<VStack gap={6}>
								<Heading
									as='h3'
									size='xl'
									fontFamily='heading'
									color='gray.800'
									textAlign='center'
									letterSpacing='-0.3px'
								>
									Book Your Appointment
								</Heading>

								<BookingForm onSubmit={handleBookingSubmit} />
							</VStack>
						</Card.Body>
					</Card.Root>
				</SimpleGrid>
			</Container>

			<ThankYouModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</Box>
	);
};

export default BookingSection;
