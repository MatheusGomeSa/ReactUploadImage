import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {



  return (
    <Modal onClose={onClose} isOpen={isOpen} >
      <ModalOverlay />
      <ModalContent bg="pGray.800" maxH='fit-content' maxW='fit-content' >
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody w='900px' size={true} >
          <Image src={imgUrl} maxWidth='850px' maxHeight='550px' objectFit='cover' mb='2' />
          <Link href={imgUrl} isExternal>Abrir original</Link>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}
