import { Checkbox } from 'components/CheckBox';
import { Modal } from 'components/Modal';
import { RadioButton } from 'components/RadioButton';
import { setStringAsync } from 'expo-clipboard';
import React, { useRef, useState } from 'react';
import { ScrollView, Text, View, ToastAndroid } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { SvgXml } from 'react-native-svg';
import { arrowRightDark, boleto as boletoIcon, pix as pixIcon } from '../../assets/svgs';
import {
  BarsCode,
  BarsCodeContainer,
  Button,
  Buttons,
  ButtonsContainer,
  ButtonText,
  CardContainer,
  Check,
  CopyCode,
  Gap,
  Input,
  Label,
  Link,
  LinkText,
  RadioContainer,
  SubTitle,
  Terms,
  Title,
} from './styles';

export function Example() {
  const modalizeRef = useRef<Modalize>(null);
  const [termsChecked, setTermsChecked] = useState(false);
  const [boletoChecked, setBoletoChecked] = useState(false);
  const [pixChecked, setPixChecked] = useState(false);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  function handleNavigation() {
    console.log('add async to function');
    // await Linking.openURL('https://www.google.com/');
  }

  const copyToClipboard = async () => {
    await setStringAsync('00190000090312855700045208637178892700000100000');
    return ToastAndroid.show('Successfully copied!', ToastAndroid.SHORT);
  };

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

        <Gap>
          <Link onPress={handleNavigation}>
            <LinkText>Contrato CCB</LinkText>
            <SvgXml xml={arrowRightDark} />
          </Link>
          <Link onPress={handleNavigation}>
            <LinkText>Termo de Ciência de Risco</LinkText>
            <SvgXml xml={arrowRightDark} />
          </Link>
        </Gap>

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

      {/* INVESTMENT RESUME SECTION */}
      <CardContainer>
        <Title>Resumo de Investimento</Title>

        <Gap>
          <Link disabled>
            <LinkText bold>CCB AJX CARBON INVESTIMENTO 2%</LinkText>
          </Link>

          <Link disabled>
            <LinkText>Valor</LinkText>
            <LinkText>R$ 1.000,00</LinkText>
          </Link>
        </Gap>
      </CardContainer>
      {/* END OF INVESTMENT RESUME SECTION */}

      <View style={{ height: 40 }} />

      {/* RADIO BUTTONS */}
      <RadioContainer onPress={() => [setBoletoChecked(true), setPixChecked(false)]}>
        <RadioButton checked={boletoChecked} />
        <SvgXml xml={boletoIcon} style={{ marginRight: 16 }} />
        <LinkText>Boleto</LinkText>
      </RadioContainer>

      <View style={{ height: 16 }} />

      <RadioContainer onPress={() => [setPixChecked(true), setBoletoChecked(false)]}>
        <RadioButton checked={pixChecked} />
        <SvgXml xml={pixIcon} style={{ marginRight: 16 }} />
        <LinkText>Pix</LinkText>
      </RadioContainer>
      {/* END OF RADIO BUTTONS */}

      <View style={{ height: 40 }} />

      {/* INVESTMENT THANKS */}
      <CardContainer>
        <Title>Obrigado pelo seu Aporte!</Title>
        <SubTitle>
          Pague o boleto agora ou até a data do vencimento para confirmar seu aporte.
          {'\n'}
          {'\n'}
          Clique em Copiar código de barras, abra o aplicativo do seu banco e efetue o pagamento.
        </SubTitle>

        <Link disabled>
          <LinkText style={{ color: '#38D462' }}>Valor</LinkText>
          <LinkText style={{ color: '#38D462' }}>R$ 1.000,00</LinkText>
        </Link>

        <BarsCodeContainer onPress={copyToClipboard}>
          <BarsCode>00190000090312855700045208637178892700000100000</BarsCode>
          <CopyCode>Copiar Código de Barras</CopyCode>
        </BarsCodeContainer>

        <SubTitle style={{ marginBottom: 0 }}>Também enviamos estas informações para seu e-mail.</SubTitle>
      </CardContainer>
      {/* ENND OF INVESTMENT THANKS */}

      <Modal modalizeRef={modalizeRef} />
    </ScrollView>
  );
}
