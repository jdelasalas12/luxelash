// components/TestimonialsSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import Slider from 'react-slick';
// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const imagePairs = [{ before: '/testimonials/testimonial-1.jpg', after: '/testimonials/testimonial-1.jpg' }];

const testimonialImages = [
	{
		img: '/testimonials/testimonial-1.jpg',
	},
];

const TestimonialsSection = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		// slidesToShow: 3,
		// slidesToScroll: 1,
		// centerMode: true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					arrows: false,
					slidesToShow: 1,
					centerMode: false,
				},
			},
		],
	};

	return (
		<Box
			id='testimonials'
			width='100%'
			py={20}
			bg='primary.50'
			overflow='hidden'
		>
			<Container
				maxW='7xl'
				mb={12}
				textAlign='center'
			>
				<VStack gap={4}>
					<Heading
						size='3xl'
						fontFamily='heading'
						color='gray.800'
					>
						Stunning Lash Transformations
					</Heading>
					<Text
						fontSize='lg'
						color='gray.600'
						maxW='600px'
					>
						See the transformation—before and after lash enhancements.
					</Text>
				</VStack>
			</Container>

			{testimonialImages.map((item, index) => (
				<Box
					key={index}
					px={{ base: 4, md: 12 }}
					mx='auto'
				>
					<Box
						mx='auto'
						w='max-content'
					>
						<Image
							src={item.img}
							width={500}
							height={500}
							alt='Before and After'
						/>
					</Box>
					{/* <ReactCompareSlider
							boundsPadding={0}
							portrait
							style={{
								height: '600px',
								width: '100%',
								maxWidth: '500px',
								borderRadius: '16px',
							}}
							itemOne={
								<ReactCompareSliderImage
									src={pair.before.startsWith('/') ? pair.before : `/testimonials/${pair.before}`}
									alt='Before'
									style={{
										objectFit: 'unset',
									}}
								/>
							}
							itemTwo={
								<ReactCompareSliderImage
									src={pair.after.startsWith('/') ? pair.after : `/testimonials/${pair.after}`}
									alt='After'
									style={{
										objectFit: 'unset',
									}}
								/>
							}
						/> */}
				</Box>
			))}
		</Box>
	);
};

export default TestimonialsSection;
