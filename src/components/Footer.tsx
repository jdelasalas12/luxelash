'use client';

import type React from 'react';
import { Box, Container, SimpleGrid, VStack, Heading, Text, HStack, IconButton, Separator } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { contactInfo } from '@/data';

const Footer = () => {
	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Box
			id='contact'
			bg='gray.800'
			color='white'
			py={12}
		>
			<Container maxW='1200px'>
				<SimpleGrid
					columns={{ base: 1, md: 2, lg: 4 }}
					gap={8}
					mb={8}
				>
					<VStack
						align='start'
						gap={4}
					>
						<Heading
							as='h3'
							size='lg'
							fontFamily='heading'
							color='primary.500'
							letterSpacing='-0.3px'
						>
							LuxeLash Studio
						</Heading>
						<Text
							color='gray.300'
							lineHeight='1.6'
						>
							Your premier destination for professional eyelash services. Enhancing natural beauty with expert care and premium products.
						</Text>
						<HStack
							gap={3}
							mt={4}
						>
							<IconButton
								aria-label='Instagram'
								bg='linear-gradient(135deg, #d4a5a5, #f5e6d3)'
								color='white'
								borderRadius='50%'
								_hover={{
									transform: 'translateY(-3px)',
									boxShadow: '0 4px 15px rgba(212, 165, 165, 0.3)',
								}}
							>
								<FaInstagram />
							</IconButton>
							<IconButton
								aria-label='Facebook'
								bg='linear-gradient(135deg, #d4a5a5, #f5e6d3)'
								color='white'
								borderRadius='50%'
								_hover={{
									transform: 'translateY(-3px)',
									boxShadow: '0 4px 15px rgba(212, 165, 165, 0.3)',
								}}
							>
								<FaFacebook />
							</IconButton>
							<IconButton
								aria-label='TikTok'
								bg='linear-gradient(135deg, #d4a5a5, #f5e6d3)'
								color='white'
								borderRadius='50%'
								_hover={{
									transform: 'translateY(-3px)',
									boxShadow: '0 4px 15px rgba(212, 165, 165, 0.3)',
								}}
							>
								<FaTiktok />
							</IconButton>
						</HStack>
					</VStack>

					<VStack
						align='start'
						gap={3}
					>
						<Heading
							as='h3'
							size='lg'
							fontFamily='heading'
							color='primary.500'
							letterSpacing='-0.3px'
						>
							Services
						</Heading>
						<Text
							color='gray.300'
							cursor='pointer'
							_hover={{ color: 'primary.500' }}
							onClick={() => scrollToSection('#services')}
						>
							Eyelash Extensions
						</Text>
						<Text
							color='gray.300'
							cursor='pointer'
							_hover={{ color: 'primary.500' }}
							onClick={() => scrollToSection('#services')}
						>
							Lash Lifts
						</Text>
						<Text
							color='gray.300'
							cursor='pointer'
							_hover={{ color: 'primary.500' }}
							onClick={() => scrollToSection('#services')}
						>
							Lash Tinting
						</Text>
						<Text
							color='gray.300'
							cursor='pointer'
							_hover={{ color: 'primary.500' }}
							onClick={() => scrollToSection('#services')}
						>
							Full Lash Package
						</Text>
					</VStack>

					<VStack
						align='start'
						gap={3}
					>
						<Heading
							as='h3'
							size='lg'
							fontFamily='heading'
							color='primary.500'
							letterSpacing='-0.3px'
						>
							Contact Info
						</Heading>
						<Text
							color='gray.300'
							whiteSpace='pre-line'
						>
							📍 {contactInfo.address}
						</Text>
						<Text color='gray.300'>📞 {contactInfo.phone}</Text>
						<Text color='gray.300'>✉️ {contactInfo.email}</Text>
					</VStack>

					<VStack
						align='start'
						gap={3}
					>
						<Heading
							as='h3'
							size='lg'
							fontFamily='heading'
							color='primary.500'
							letterSpacing='-0.3px'
						>
							Hours
						</Heading>
						<Text color='gray.300'>{contactInfo.hours.weekdays}</Text>
						<Text color='gray.300'>{contactInfo.hours.weekend}</Text>
					</VStack>
				</SimpleGrid>

				<Separator borderColor='gray.600' />

				<Text
					textAlign='center'
					color='gray.400'
					mt={8}
				>
					© 2025 Lift Lash by Mendy. All rights reserved.
				</Text>
			</Container>
		</Box>
	);
};

export default Footer;
