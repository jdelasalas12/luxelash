'use client';

import { useState } from 'react';
import { Box, Input, Button, VStack, Text } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '@/services/firebase';
import { Toaster, toaster } from '@/components/ui/toaster';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleLogin = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);

			toaster.create({
				description: 'Successfully logged in',
				type: 'success',
				closable: true,
				duration: 3000,
			});

			router.push('/admin/bookings');
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toaster.create({
				description: error.message || 'Please try again.',
				type: 'error',
				closable: true,
				duration: 3000,
			});
		}
	};

	return (
		<Box
			maxW='400px'
			mx='auto'
			mt='100px'
			p={6}
			borderWidth={1}
			borderRadius='lg'
			boxShadow='md'
		>
			<Toaster />
			<VStack gap={4}>
				<Text
					fontSize='2xl'
					fontWeight='bold'
				>
					Admin Login
				</Text>
				<Input
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder='Password'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					colorScheme='teal'
					onClick={handleLogin}
					width='full'
				>
					Log In
				</Button>
			</VStack>
		</Box>
	);
};

export default LoginPage;
