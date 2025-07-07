'use client';

import type React from 'react';
import { Box, Container, Heading, Text, Button, VStack, HStack } from '@chakra-ui/react';

interface HeroSectionProps {
	onBookingClick: () => void;
}

const HeroSection = ({ onBookingClick }: HeroSectionProps) => {
	const scrollToServices = () => {
		const element = document.querySelector('#services');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Box
			id='home'
			minH='100vh'
			background="linear-gradient(rgba(212, 165, 165, 0.15), rgba(245, 230, 211, 0.15)), url('https://www.gladgirl.com/cdn/shop/articles/Hybrid-Lashes-Featured-GladGirl-Model_1d214f05-6009-43ad-8dc7-7cddc9edd8da_737x.jpg?v=1658115056')"
			backgroundSize='cover'
			backgroundPosition='center'
			backgroundAttachment='fixed'
			display='flex'
			alignItems='center'
			justifyContent='center'
			position='relative'
			css={{
				'@media screen and (max-width:576px)': {
					minH:'calc(100vh + 80px)'
				},
				'@media screen and (max-width:350px)':{
					minH:'calc(100vh + 200px)'
				}
			}}
		>
			<Box
				position='absolute'
				top={0}
				left={0}
				right={0}
				bottom={0}
				bg='rgba(247, 246, 244, 0.1)'
				backdropFilter='blur(1px)'
			/>

			<Container
				maxW='800px'
				textAlign='center'
				position='relative'
				zIndex={2}
			>
				<VStack
					gap={8}
					background='rgba(255, 255, 255, 0.6)'
					borderRadius='12px'
					padding='2rem'
				>
					<Heading
						as='h1'
						size='4xl'
						fontFamily='heading'
						color='gray.800'
						letterSpacing='-1px'
					>
						Beautiful Lashes, Beautiful You!
					</Heading>

					<Text
						fontSize='xl'
						color='gray.600'
						maxW='600px'
						lineHeight='1.6'
					>
						Beautiful lashes, beautiful you!

					✨ Say hello to effortless beauty! ✨  
					No extensions, no mascara — just your natural lashes lifted & tinted to perfection! 💕  

					Get that wide-eyed, fresh look that lasts up to 8 weeks!  
					Perfect for busy queens who want to wake up ready every day 👑
					</Text>

					<HStack
						gap={4}
						flexWrap='wrap'
						justify='center'
					>
						<Button
							bg='linear-gradient(135deg, #d4a5a5, #f5e6d3)'
							color='white'
							size='lg'
							onClick={onBookingClick}
							_hover={{
								transform: 'translateY(-3px)',
								boxShadow: '0 8px 25px rgba(212, 165, 165, 0.4)',
							}}
							borderRadius='30px'
						>
							Book Appointment
						</Button>
						<Button
							bg='transparent'
							color='gray.800'
							border='2px solid'
							borderColor='primary.500'
							size='lg'
							onClick={scrollToServices}
							_hover={{
								bg: 'primary.500',
								color: 'white',
								transform: 'translateY(-3px)',
								boxShadow: '0 8px 25px rgba(212, 165, 165, 0.3)',
							}}
							borderRadius='30px'
						>
							View Services
						</Button>
					</HStack>
				</VStack>
			</Container>
		</Box>
	);
};

export default HeroSection;
