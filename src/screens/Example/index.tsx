import { Checkbox } from 'components/CheckBox';
import { Modal } from 'components/Modal';
import React, { useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { SvgXml } from 'react-native-svg';
import { arrowRightDark } from '../../assets/svgs';
import {
  Button,
  Buttons,
  ButtonsContainer,
  ButtonText,
  CardContainer,
  Check,
  Input,
  Label,
  Link,
  LinkText,
  SubTitle,
  Terms,
  Title,
} from './styles';

export function Example() {
  const modalizeRef = useRef<Modalize>(null);
  const [termsChecked, setTermsChecked] = useState(false);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  function handleNavigation() {
    console.log('add async to function');
    // await Linking.openURL('https://www.google.com/');
  }

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        paddingHorizontal: 24,
      }}
    >
      <Button onPress={() => onOpen()}>
        <Text style={{ color: '#fff' }}>Example</Text>
      </Button>

      {/* INVESTMENT SECTION */}
      <CardContainer>
        <Title>Quanto você quer investir?</Title>
        <SubTitle>Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. </SubTitle>

        <Label>Investimento</Label>
        <Input keyboardType="numeric" />
      </CardContainer>
      {/* END OF INVESTMENT SECTION */}

      <View style={{ height: 40 }} />

      {/* TERMS OF USE SECTION */}
      <CardContainer>
        <Title>Termos de uso e termo de adesão e Ciência de Riscos</Title>
        <SubTitle>Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. </SubTitle>

        <Link onPress={handleNavigation}>
          <LinkText>Contrato CCB</LinkText>
          <SvgXml xml={arrowRightDark} />
        </Link>
        <Link onPress={handleNavigation}>
          <LinkText>Termo de Ciência de Risco</LinkText>
          <SvgXml xml={arrowRightDark} />
        </Link>

        <Check>
          <Checkbox onValueChange={setTermsChecked} value={termsChecked} />
          <Terms>Declaro que li e estou de acordo{'\n'}com todos os Termos acima.</Terms>
        </Check>
      </CardContainer>
      {/* END OF TERMS OF USE SECTION */}

      <View style={{ height: 40 }} />

      {/* BUTTONS */}
      <ButtonsContainer>
        <Buttons variant="secondary">
          <ButtonText variant="secondary">Voltar</ButtonText>
        </Buttons>
        <Buttons variant="primary">
          <ButtonText variant="primary">Continuar</ButtonText>
        </Buttons>
      </ButtonsContainer>

      <View style={{ height: 16 }} />

      <Buttons variant="primary" disabled>
        <ButtonText variant="primary">Continuar</ButtonText>
      </Buttons>
      {/* END BUTTONS */}

      <View style={{ height: 40 }} />

      <Modal modalizeRef={modalizeRef} />
    </ScrollView>
  );
}
