'use client';

import { Dialog, DialogBackdrop, DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogTitle, DialogPositioner, Portal, VStack, Box, Text, CloseButton } from '@chakra-ui/react';
import { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

interface ThankYouModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ThankYouModal = ({ isOpen, onClose }: ThankYouModalProps) => {
	useEffect(() => {
		if (isOpen) {
			const timer = setTimeout(onClose, 5000);
			return () => clearTimeout(timer);
		}
	}, [isOpen, onClose]);

	return (
		<Dialog.Root
			open={isOpen}
			onOpenChange={(e) => !e.open && onClose()}
			placement='center'
		>
			<Portal>
				<DialogBackdrop bg='blackAlpha.600' />
				<DialogPositioner>
					<DialogContent
						bg='white'
						borderRadius='20px'
						p={8}
						maxW='500px'
						mx={4}
						position='relative'
						zIndex={1400}
						textAlign='center'
					>
						<DialogCloseTrigger asChild>
							<CloseButton
								position='absolute'
								top={4}
								right={4}
							/>
						</DialogCloseTrigger>

						<DialogHeader
							color='gray.800'
							marginX='auto'
						>
							<DialogTitle>Thank You!</DialogTitle>
						</DialogHeader>

						<DialogBody>
							<VStack
								gap={6}
								mt={4}
							>
								<Box
									w='80px'
									h='80px'
									bg='linear-gradient(135deg, #d4a5a5, #f5e6d3)'
									borderRadius='full'
									display='flex'
									alignItems='center'
									justifyContent='center'
								>
									<FaCheck
										size='40px'
										color='white'
									/>
								</Box>

								<Text
									color='gray.600'
									fontSize='lg'
								>
									Your booking request has been submitted successfully. We&apos;ll contact you within 24 hours.
								</Text>
							</VStack>
						</DialogBody>
					</DialogContent>
				</DialogPositioner>
			</Portal>
		</Dialog.Root>
	);
};

export default ThankYouModal;
