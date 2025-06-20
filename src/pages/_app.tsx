import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@/theme';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider value={system}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
