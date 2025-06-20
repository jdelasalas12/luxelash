import type React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Card } from '@chakra-ui/react';
import { FaEye, FaMagic, FaTint, FaStar } from 'react-icons/fa';
import { services } from '@/data';

const iconMap = {
	eye: FaEye,
	magic: FaMagic,
	tint: FaTint,
	star: FaStar,
};

const ServicesSection = () => {
	return (
		<Box
			id='services'
			py={20}
			bg='primary.50'
			minH='80vh'
			display='flex'
			alignItems='center'
		>
			<Container maxW='1440px'>
				<VStack
					gap={12}
					textAlign='center'
				>
					<VStack gap={4}>
						<Heading
							as='h2'
							size='3xl'
							fontFamily='heading'
							color='gray.800'
							letterSpacing='-0.5px'
						>
							Our Premium Services
						</Heading>
						<Text
							fontSize='lg'
							color='gray.600'
							maxW='600px'
							lineHeight='1.6'
						>
							Discover our range of professional eyelash treatments designed to enhance your natural beauty
						</Text>
					</VStack>

					<SimpleGrid
						columns={{ base: 1, md: 2, lg: 4 }}
						gap={8}
						w='full'
					>
						{services.map((service) => {
							const IconComponent = iconMap[service.icon as keyof typeof iconMap];

							return (
								<Card.Root
									key={service.id}
									bg='white'
									p={6}
									textAlign='center'
									_hover={{
										transform: 'translateY(-10px)',
										boxShadow: '0 15px 35px rgba(212, 165, 165, 0.2)',
									}}
									transition='all 0.3s ease'
									borderRadius='20px'
									boxShadow='0 8px 25px rgba(212, 165, 165, 0.12)'
									border='1px solid rgba(212, 165, 165, 0.08)'
								>
									<Card.Body>
										<VStack gap={4}>
											<Box
												w='80px'
												h='80px'
												bg='linear-gradient(135deg, #d4a5a5, #f5e6d3)'
												borderRadius='50%'
												display='flex'
												alignItems='center'
												justifyContent='center'
												boxShadow='0 4px 15px rgba(212, 165, 165, 0.25)'
											>
												<IconComponent
													size='32px'
													color='white'
												/>
											</Box>

											<Heading
												as='h3'
												size='lg'
												fontFamily='heading'
												color='gray.800'
												letterSpacing='-0.3px'
											>
												{service.title}
											</Heading>

											<Text
												color='gray.600'
												lineHeight='1.6'
											>
												{service.description}
											</Text>

											<Text
												fontSize='xl'
												fontWeight='600'
												color='primary.500'
											>
												{service.price}
											</Text>
										</VStack>
									</Card.Body>
								</Card.Root>
							);
						})}
					</SimpleGrid>
				</VStack>
			</Container>
		</Box>
	);
};

export default ServicesSection;
