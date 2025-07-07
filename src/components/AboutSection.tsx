import type React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
} from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box id="about" py={20}>
      <Container maxW="1200px">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16} alignItems="center">
          <VStack gap={6} align="start">
            <Heading
              as="h2"
              size="3xl"
              fontFamily="heading"
              color="gray.800"
              letterSpacing="-0.5px"
            >
              Why Choose LuxeLash by Mendy? 💖
            </Heading>

            <Text fontSize="lg" color="gray.600" lineHeight="1.7">
              ✨ <b>Expert Touch</b> – Trained hands with a passion for enhancing
              natural beauty.
              <br />
              ✨ <b>Premium Products</b> – Only high-quality, safe, and gentle lash
              solutions. <br />
              ✨ <b>Long-lasting Results</b> – One session can last up to 6–8 weeks!{" "}
              <br />
              ✨ <b>Hygiene First</b> – Strict cleanliness and client safety protocols.{" "}
              <br />
              ✨ <b>Personalized Service</b> – Every lash lift is tailored to your eye
              shape and lash type.
              <br />
            </Text>

            <Text fontSize="lg" color="gray.600" lineHeight="1.7">
              Your lashes deserve luxe care – choose LuxeLash by Mendy! 💕
              <br /><br />
              <b>#LashLift #LuxeLashByMendy #NaturalBeauty #RiyadhLashes</b>
            </Text>

            <Text fontSize="lg" color="gray.600" lineHeight="1.5">
              We use only premium, hypoallergenic products and maintain the
              highest standards of hygiene and safety. Every treatment is
              customized to your unique eye shape and desired look.
            </Text>

            <Text fontSize="lg" color="gray.600" lineHeight="1.7">
              Our relaxing studio environment ensures you&apos;ll leave feeling
              refreshed and confident with your beautiful new lashes.
            </Text>
          </VStack>

          <Box
            borderRadius="20px"
            overflow="hidden"
            boxShadow="0 15px 35px rgba(232, 180, 184, 0.2)"
            position="relative"
            _hover={{
              "& img": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgGradient="to-br"
              gradientFrom="primary.500"
              gradientTo="secondary.500"
              opacity={0.1}
              zIndex={1}
            />
            <Image
              src="/testimonials/why-choose.jpg"
              alt="Professional lash technician working"
              w="full"
              h="400px"
              objectFit="cover"
              transition="transform 0.3s ease"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AboutSection;
