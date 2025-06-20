'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { Box, Flex, Text, HStack, Button } from '@chakra-ui/react';

interface HeaderProps {
	onBookingClick: () => void;
}

const Header = ({ onBookingClick }: HeaderProps) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ label: 'Home', href: '#home' },
		{ label: 'Services', href: '#services' },
		{ label: 'Reviews', href: '#testimonials' },
		{ label: 'About', href: '#about' },
		{ label: 'Contact', href: '#booking' },
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Box
			position='fixed'
			top={0}
			left={0}
			right={0}
			zIndex={1000}
			bg={isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)'}
			backdropFilter='blur(15px)'
			borderBottom='1px solid'
			borderColor='primary.100'
			transition='all 0.3s ease'
			boxShadow={isScrolled ? '0 2px 20px rgba(212, 165, 165, 0.15)' : 'none'}
		>
			<Flex
				maxW='1200px'
				mx='auto'
				px={5}
				py={4}
				align='center'
				justify='space-between'
			>
				<Text
					fontSize='2xl'
					fontWeight='700'
					color='primary.500'
					fontFamily='heading'
					letterSpacing='-0.5px'
				>
					Lift Lash by Mendy
				</Text>

				{/* Desktop Navigation */}
				<HStack
					gap={8}
					hideBelow='md'
				>
					{navItems.map((item) => (
						<Text
							key={item.label}
							cursor='pointer'
							fontWeight='500'
							color='gray.800'
							position='relative'
							_hover={{ color: 'primary.500' }}
							onClick={() => scrollToSection(item.href)}
							transition='color 0.3s ease'
						>
							{item.label}
						</Text>
					))}
				</HStack>

				<HStack gap={4}>
					<Button
						bg='linear-gradient(135deg, #d4a5a5, #f5e6d3)'
						size='md'
						onClick={onBookingClick}
						hideBelow='sm'
						_hover={{
							transform: 'translateY(-2px)',
							boxShadow: '0 6px 20px rgba(212, 165, 165, 0.35)',
						}}
						borderRadius='30px'
					>
						Book Now
					</Button>
				</HStack>
			</Flex>
		</Box>
	);
};

export default Header;
