// components/TestimonialsSection.tsx
"use client";

import React from "react";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Grid,
  GridItem,
  Image
} from "@chakra-ui/react";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {testimonialData}  from '@/data';



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
      id="testimonials"
      width="100%"
      py={20}
      bg="primary.50"
      overflow="hidden"
    >
      <Container maxW="7xl" mb={12} textAlign="center">
        <VStack gap={4}>
          <Heading size="3xl" fontFamily="heading" color="gray.800">
            Stunning Lash Transformations
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="600px">
            See the transformation—before and after lash enhancements.
          </Text>
        </VStack>
      </Container>

      <Box px={{ base: 4, md: 12 }} mx="auto">
        <Grid templateColumns="repeat(auto-fit, minmax(150px, max-content))" justifyContent="center" gap="12px">
          {testimonialData.map((item, index) => (
            <GridItem key={index} maxW="400px" mx="auto">
              {item.type === "image" ? (
                <Image
                  src={item.source}
                  fit="cover"
				  width="100%"
				  height="100%"
                  alt="Before and After"
                />
              ) : (
                <video width="100%" height="240" preload="none" autoPlay loop muted>
                  <source src={item.source} type="video/mp4" />
                </video>
              )}
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
