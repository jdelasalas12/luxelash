import type { Service, Testimonial, ContactInfo, Booking } from '@/types';

export const services: Service[] = [
	{
		id: '1',
		icon: 'magic',
		title: 'Lash Lift',
		description: 'Natural curl enhancement that lifts and defines your existing lashes. Perfect for a natural, everyday look.',
		price: 'SAR 90',
	},
	{
		id: '2',
		icon: 'tint',
		title: 'Lash Lift plus Tint',
		description: 'Semi-permanent dye to darken and define your lashes. Great for light-colored or sparse lashes.',
		price: 'SAR 100',
	},
	
];

export const testimonials: Testimonial[] = [
	{
		id: '1',
		name: 'Emma Martinez',
		role: 'Regular Client',
		avatar: 'EM',
		text: "I've been coming to LuxeLash Studio for over a year now, and I'm absolutely obsessed! The lash extensions look so natural and last for weeks. Sarah is incredibly skilled and makes me feel so comfortable during the process. I get compliments on my lashes every single day!",
		rating: 5,
	},
	{
		id: '2',
		name: 'Jessica Liu',
		role: 'Lash Lift Client',
		avatar: 'JL',
		text: "The lash lift and tint combo is a game changer! I wake up every morning looking put together without any effort. The studio is so clean and relaxing, and the results are consistently amazing. I've recommended LuxeLash to all my friends!",
		rating: 5,
	},
	{
		id: '3',
		name: 'Aria Rodriguez',
		role: 'Extension Client',
		avatar: 'AR',
		text: 'As someone with very sparse natural lashes, I was hesitant about extensions. But the team at LuxeLash worked with me to create the perfect look that enhanced my natural beauty. The attention to detail is incredible, and I feel so confident now!',
		rating: 5,
	},
	{
		id: '4',
		name: 'Maya Kim',
		role: 'VIP Client',
		avatar: 'MK',
		text: "Professional, hygienic, and absolutely stunning results every time. I've tried other lash studios before, but nothing compares to the quality and service at LuxeLash. The full package treatment is worth every penny - my lashes have never looked better!",
		rating: 5,
	},
];

export const contactInfo: ContactInfo = {
	address: '123 Beauty Lane, Aesthetic District\nCity, State 12345',
	phone: '+966 503 635 583',
	email: 'hello@liftlash.com',
	hours: {
		weekdays: 'Thursday: 9:30PM - 11PM',
		weekend1: 'Friday: 5PM - 12MN',
		weekend2: 'Saturday: 9:30PM - 11PM',
	},
};

export const mockBookings: Booking[] = [
	{
		id: 'bkg-001',
		name: 'Jane Doe',
		email: 'jane.doe@example.com',
		phone: '09171234567',
		service: 'Haircut',
		date: '2025-06-21',
		time: '10:00 AM',
		status: 'confirmed',
		createdAt: Date.now() - 86400000,
	},
	{
		id: 'bkg-002',
		name: 'John Smith',
		email: 'john.smith@example.com',
		phone: '09179876543',
		service: 'Massage',
		date: '2025-06-22',
		time: '2:30 PM',
		status: 'pending',
		createdAt: Date.now() - 7200000,
	},
	{
		id: 'bkg-003',
		name: 'Alice Garcia',
		email: 'alice.garcia@example.com',
		phone: '09175554433',
		service: 'Facial',
		date: '2025-06-20',
		time: '4:00 PM',
		status: 'cancelled',
		createdAt: Date.now() - 172800000,
	},
	{
		id: 'bkg-004',
		name: 'Mark Lee',
		email: 'mark.lee@example.com',
		phone: '09178889900',
		service: 'Nail Treatment',
		date: '2025-06-23',
		time: '11:00 AM',
		status: 'confirmed',
		createdAt: Date.now() - 3600000,
	},
	{
		id: 'bkg-005',
		name: 'Liza Cruz',
		email: 'liza.cruz@example.com',
		phone: '09176667788',
		service: 'Waxing',
		date: '2025-06-24',
		time: '9:00 AM',
		status: 'pending',
		createdAt: Date.now() - 18000000,
	},
];


export const testimonialData = [
//   {
//     source: "/testimonials/testimonial-1.jpg",
//     type: "image",
//   },
  {
    source: "/testimonials/testimonials-vid-1.mp4",
    type: "video",
  },
  
];