import React from 'react';
import { Platform, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Button, ButtonText, SubTitle, Input, Label, Title } from './styles';

type ModalProps = {
  modalizeRef: React.RefObject<Modalize>;
};

export function Modal({ modalizeRef }: ModalProps) {
  return (
    <Modalize
      ref={modalizeRef}
      adjustToContentHeight
      keyboardAvoidingBehavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      modalStyle={{
        backgroundColor: '#F6F6F6',
        padding: 28,
      }}
      scrollViewProps={{
        keyboardShouldPersistTaps: 'handled',
      }}
    >
      <View>
        <Title>Quanto você quer investir?</Title>
        <SubTitle>Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. </SubTitle>

        <Label>Investimento</Label>
        <Input keyboardType="numeric" />

        <Button activeOpacity={0.6} onPress={() => console.log('clicked')}>
          <ButtonText>Investir</ButtonText>
        </Button>
      </View>
    </Modalize>
  );
}
