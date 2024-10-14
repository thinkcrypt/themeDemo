'use client';

import { store } from '@/store';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		// <CacheProvider>
		<Provider store={store}>
			<ChakraProvider>{children}</ChakraProvider>
		</Provider>
		// </CacheProvider>
	);
}
