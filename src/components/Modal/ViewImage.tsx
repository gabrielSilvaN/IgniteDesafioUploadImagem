import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
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
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
      <ModalOverlay>
        <ModalContent maxW="900px" maxH="600px">
          <ModalBody
            p={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={imgUrl} />
          </ModalBody>
          <ModalFooter
            display="flex"
            h="2rem"
            py="20px"
            bg="pGray.800"
            borderBottomRadius="5px"
            justifyContent="flex-start"
          >
            <Link href={imgUrl}>Abrir original</Link>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
