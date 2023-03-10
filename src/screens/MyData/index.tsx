import { InputMaskText } from 'components/InputMaskText';
import { InputText } from 'components/InputText';
import { ScreenTitle } from 'components/ScreenTitle';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Masks } from 'react-native-mask-input';
import { rgMask } from 'utils/masks';
import {
    Container,
    ContentContainer,
    FormContainer, HeaderContainer, TouchableContainer
} from './styles';

export function MyData() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')


    return (

        <Container>
            <StatusBar style="dark" />
            <HeaderContainer>
                <ScreenTitle
                    pageTitle='Meus dados'
                />
            </HeaderContainer>
            <TouchableContainer>
                <ContentContainer
                    showsVerticalScrollIndicator={false}
                >
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
                            label='CPF'
                            mask={Masks.BRL_CPF}
                            value={cpf}
                            onChangeText={setCpf}
                            keyboardType='numeric'
                        />
                        <InputMaskText
                            label='RG'
                            mask={rgMask}
                            value={rg}
                            onChangeText={setRg}
                            keyboardType='numeric'
                        />
                        <InputText
                            label='E-mail'
                            value={email}
                            onChangeText={setEmail}
                        />
                        <InputMaskText
                            label='Celular'
                            mask={Masks.BRL_PHONE}
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType='numeric'
                        />
                    </FormContainer>
                </ContentContainer>
            </TouchableContainer>
        </Container>
    )
}