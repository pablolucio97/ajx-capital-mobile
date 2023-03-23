import { Modal } from 'components/Modal';
import React, { useRef } from 'react';
import { Text } from 'react-native';
import { Button, Container } from './styles';
import { Modalize } from 'react-native-modalize';

export function Example() {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <Container>
      <Button onPress={() => onOpen()}>
        <Text style={{ color: '#fff' }}>Example</Text>
      </Button>

      <Modal modalizeRef={modalizeRef} />
    </Container>
  );
}
