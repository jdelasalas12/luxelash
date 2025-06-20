import Head from 'next/head';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

export default function Home() {
	const scrollToBooking = () => {
		const element = document.querySelector('#booking');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<Head>
				<title>Lift Lash by Mendy</title>
				<meta
					name='description'
					content='Transform your look with our premium eyelash services. From extensions to lifts, we create stunning results that enhance your natural beauty.'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Header onBookingClick={scrollToBooking} />
			<HeroSection onBookingClick={scrollToBooking} />
			<ServicesSection />
			<AboutSection />
			<TestimonialsSection />
			<BookingSection />
			<Footer />
		</>
	);
}
