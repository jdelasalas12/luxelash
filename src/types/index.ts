export interface Service {
	id: string;
	icon: string;
	title: string;
	description: string;
	price: string;
}

export interface Testimonial {
	id: string;
	name: string;
	role: string;
	avatar: string;
	text: string;
	rating: number;
}

export interface BookingFormData {
	name: string;
	email: string;
	phone: string;
	service: string;
	date: string;
	time: string;
	notes: string;
}

export interface ContactInfo {
	address: string;
	phone: string;
	email: string;
	hours: {
		weekdays: string;
		weekend: string;
	};
}

export interface Booking {
	id: string;
	name: string;
	email: string;
	phone: string;
	service: string;
	date: string;
	time: string;
	status: 'pending' | 'confirmed' | 'cancelled';
	createdAt: number;
}
