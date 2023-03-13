/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import { FormTitleProgress } from 'components/FormTitleProgress';
import { ScreenTitle } from 'components/ScreenTitle';
import { StepController } from 'components/StepController';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FormStepFour } from './FormStepFour';
import { FormStepOne } from './FormStepOne';
import { FormStepThree } from './FormStepThree';
import { FormStepTwo } from './FormStepTwo';
import {
    Container,
    ContentContainer,
    HeaderContainer,
    TitleContainer,
    TouchableContainer
} from './styles';

export function MyData() {

    const navigation = useNavigation()

    const [registrationProgress, setRegistrationProgress] = useState(1)
    const [formTitle, setFormTitle] = useState('Dados Gerais')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const [, setCivilState] = useState('')
    const [, setGender] = useState('')
    const [cep, setCep] = useState('')
    const [city, setCity] = useState('')
    const [residenceNumber, setResidenceNumber] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [street, setStreet] = useState('')
    const [occupation, setOccupation] = useState('')
    const [enterpriseName, setEnterpriseName] = useState('')
    const [position, setPosition] = useState('')
    const [, setBank] = useState('')
    const [agency, setAgency] = useState('')
    const [account, setAccount] = useState('')


    function handlePrevious() {
        registrationProgress === 1 ?
            navigation.navigate('Detalhes Perfil' as never) :
            setRegistrationProgress(registrationProgress - 1)
    }

    function handleNext() {
        setRegistrationProgress(registrationProgress + 1)
    }

    function updateFormTitle() {
        switch (registrationProgress) {
            case 1:
                setFormTitle('Dados Gerais')
                break
            case 2:
                setFormTitle('Endereço')
                break
            case 3:
                setFormTitle('Profissão')
                break
            case 4:
                setFormTitle('Dados bancários')
                break
            case 5:
                setFormTitle('Perfil de Investimento')
                break
            case 6:
                setFormTitle('Documentos')
                break
            default: 'Dados Gerais'
        }
    }

    function renderForm() {
        switch (registrationProgress) {
            case 1:
                return (
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
                )
            case 2:
                return (
                    <FormStepTwo
                        cep={cep}
                        city={city}
                        neighborhood={neighborhood}
                        residenceNumber={residenceNumber}
                        setCep={setCep}
                        setCity={setCity}
                        setNeighborhood={setNeighborhood}
                        setResidenceNumber={setResidenceNumber}
                        setStreet={setStreet}
                        street={street}
                    />
                )
            case 3:
                return (
                    <FormStepThree
                        occupation={occupation}
                        setOccupation={setOccupation}
                        enterpriseName={enterpriseName}
                        setEnterpriseName={setEnterpriseName}
                        position={position}
                        setPosition={setPosition}
                    />
                )
            case 4:
                return (
                    <FormStepFour
                        setBank={setBank}
                        agency={agency}
                        setAgency={setAgency}
                        account={account}
                        setAccount={setAccount}
                    />
                )
            default: 1
        }
    }

    useEffect(() => {
        updateFormTitle()
    }, [registrationProgress])

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
                            formTitle={formTitle}
                            progress={registrationProgress}
                        />
                    </TitleContainer>
                    {renderForm()}
                    <StepController
                        nextAction={handleNext}
                        previousAction={handlePrevious}
                        disabledPreviousButton={registrationProgress <= 0}
                    />
                </ContentContainer>
            </TouchableContainer>
        </Container>
    )
}