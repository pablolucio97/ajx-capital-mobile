import { GoogleSignInButton } from 'components/GoogleSignInButton';
import { HeaderNavigation } from 'components/HeaderNavigation';
import { InputText } from 'components/InputText';
import { InputMaskText } from 'components/InputMaskText';
import { PrimaryButton } from 'components/PrimaryButton';
import { Svg } from 'components/Svg';
import { Text } from 'components/Text';
import { StatusBar } from 'expo-status-bar';
import { logo } from '../../assets/svgs';
import { Masks } from 'react-native-mask-input'
import {
    CheckContainer,
    Container,
    ContentContainer,
    FormContainer,
    GoogleLoginContainer,
    HeaderContainer,
    LogoContainer,
    Styles,
    TouchableContainer
} from './styles';
import React, { useState } from 'react';
import { CheckBox } from 'components/CheckBox';

export function SignUp() {

    const [termsChecked, setTermsChecked] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')

    return (
        <Container>
            <StatusBar style="dark" />
            <HeaderContainer>
                <HeaderNavigation
                    title='Cadastre-se'
                    style={Styles.headerNavigation}
                />
            </HeaderContainer>
            <TouchableContainer>
                <ContentContainer
                    showsVerticalScrollIndicator={false}
                >
                    <LogoContainer>
                        <Svg
                            width={96}
                            height={72}
                            xml={logo}
                        />
                    </LogoContainer>
                    <GoogleLoginContainer>
                        <GoogleSignInButton />
                    </GoogleLoginContainer>
                    <Text
                        content='ou'
                        style={Styles.text}
                    />
                    <FormContainer>
                        <InputText
                            label='Nome Completo'
                            value={name}
                            onChangeText={setName}
                        />
                        <InputMaskText
                            label='Data de nascimento'
                            mask={Masks.DATE_DDMMYYYY}
                            value={birthDate}
                            onChangeText={setBirthDate}
                            keyboardType='numeric'
                        />
                        <InputMaskText
                            label='Telefone'
                            mask={Masks.BRL_PHONE}
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType='numeric'
                        />
                        <InputMaskText
                            label='CPF'
                            mask={Masks.BRL_CPF}
                            value={cpf}
                            onChangeText={setCpf}
                            keyboardType='numeric'
                        />
                        <InputText
                            label='E-mail'
                            value={email}
                            onChangeText={setEmail}
                        />
                        <InputText
                            label='Senha (Mínimo 6 caracteres)*'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <CheckContainer>
                            <CheckBox
                                onValueChange={setTermsChecked}
                                value={termsChecked}
                            />
                            <Text
                                content='Li e concordo com as'
                                style={Styles.termsText}
                            />
                            <Text
                                content={'Condições e'}
                                style={Styles.acceptTermsText}
                            />
                        </CheckContainer>
                        <Text
                            content={'Termos de uso'}
                            style={Styles.termsTextFinal}
                        />
                        <PrimaryButton
                            title='Cadastre-se'
                            style={Styles.registerButton}
                        />
                    </FormContainer>
                </ContentContainer>
            </TouchableContainer>
        </Container>
    )
}