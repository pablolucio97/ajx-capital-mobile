import { FormTitleProgress } from 'components/FormTitleProgress';
import { InputMaskText } from 'components/InputMaskText';
import { InputText } from 'components/InputText';
import { ScreenTitle } from 'components/ScreenTitle';
import { SelectPicker } from 'components/SelectPicker';
import { StepController } from 'components/StepController';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Masks } from 'react-native-mask-input';
import { rgMask } from 'utils/masks';
import { countries, genders } from 'utils/mockedData';
import {
    Container,
    ContentContainer,
    FormContainer,
    HeaderContainer,
    TitleContainer,
    TouchableContainer
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
                    <TitleContainer>
                        <FormTitleProgress
                            formTitle='Dados gerais'
                            progress={1}
                        />
                    </TitleContainer>
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
                        <SelectPicker
                            label='Estado Civil'
                            defaultButtonText='Selecione uma opção'
                            data={countries}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                        />
                        <SelectPicker
                            label='Gênero'
                            defaultButtonText='Selecione uma opção'
                            data={genders}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
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
                        <StepController
                            nextAction={() => { }}
                            previousAction={() => { }}
                            save={() => { }}
                        />
                    </FormContainer>
                </ContentContainer>
            </TouchableContainer>
        </Container>
    )
}