import { FormTitleProgress } from 'components/FormTitleProgress';
import { ScreenTitle } from 'components/ScreenTitle';
import { StepController } from 'components/StepController';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FormStepOne } from './FormStepOne';
import {
    Container,
    ContentContainer,
    HeaderContainer,
    TitleContainer,
    TouchableContainer
} from './styles';

export function MyData() {

    const [registrationProgress, setRegistrationProgress] = useState(1)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const [civilState, setCivilState] = useState('')
    const [gender, setGender] = useState('')


    async function handleSave() {
        console.log({
            name,
            email,
            birthDate,
            phone,
            cpf,
            rg,
            civilState,
            gender
        })
    }

    async function handlePrevious() {
        setRegistrationProgress(registrationProgress - 1)
        console.log(registrationProgress)
    }

    async function handleNext() {
        setRegistrationProgress(registrationProgress + 1)
        console.log(registrationProgress)
    }

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
                    {
                        registrationProgress === 1 &&
                        <FormStepOne
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            birthDate={birthDate}
                            setBirthDate={setBirthDate}
                            cpf={cpf}
                            setCpf={setCpf}
                            rg={rg}
                            setRg={setRg}
                            phone={phone}
                            setPhone={setPhone}
                            setCivilState={setCivilState}
                            setGender={setGender}
                        />
                    }
                    <StepController
                        nextAction={handleNext}
                        previousAction={handlePrevious}
                        save={handleSave}
                    />
                </ContentContainer>
            </TouchableContainer>
        </Container>
    )
}