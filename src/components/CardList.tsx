import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onClose, onOpen } = useDisclosure()

  const [url, setUrl] = useState('');

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  function HandleViewImage(url: string) {
    onOpen();
    setUrl(url);
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} gap="40px">
        {cards?.map((card, index) => {
          return (
            <Card key={index} data={card} viewImage={HandleViewImage} />
          )
        })}

      </SimpleGrid>
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={url} />
      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}
