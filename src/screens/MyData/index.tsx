import { useNavigation } from '@react-navigation/native';
import { FormTitleProgress } from 'components/FormTitleProgress';
import { ScreenTitle } from 'components/ScreenTitle';
import { StepController } from 'components/StepController';
import { StatusBar } from 'expo-status-bar';

import React, { useCallback, useEffect, useState } from 'react';
import { FormStepFive } from './FormStepFive';
import { FormStepFour } from './FormStepFour';
import { FormStepOne } from './FormStepOne';
import { FormStepSix } from './FormStepSix';
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
    const [, setBestProfileStituation] = useState('')
    const [, setMainSegmentToInvest] = useState('')
    const [, setPatrimonyToInvest] = useState('')
    const [monthlyIncome, setMonthlyIncome] = useState('')
    const [totalPatrimony, setTotalPatrimony] = useState('')
    const [isPoliticExposedPeople, setIsPoliticExposedPeople] = useState(false)
    const [agreeDisplayedAsInvestor, setAgreeDisplayedAsInvestor] = useState(false)


    function handleSave() {
        setRegistrationProgress(6)
    }

    function handlePrevious() {
        registrationProgress === 1 ?
            navigation.navigate('Detalhes Perfil' as never) :
            setRegistrationProgress(registrationProgress - 1)
    }

    function handleNext() {
        registrationProgress >= 6 ?
            handleSave() :
            setRegistrationProgress(registrationProgress + 1)

    }

    const updateFormTitle = useCallback(() => {
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
    }, [registrationProgress])



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
            case 5:
                return (
                    <FormStepFive
                        monthlyIncome={monthlyIncome}
                        setBestProfileStituation={setBestProfileStituation}
                        setMainSegmentToInvest={setMainSegmentToInvest}
                        setMonthlyIncome={setMonthlyIncome}
                        setPatrimonyToInvest={setPatrimonyToInvest}
                        setTotalPatrimony={setTotalPatrimony}
                        totalPatrimony={totalPatrimony}
                        agreeDisplayedAsInvestor={agreeDisplayedAsInvestor}
                        isPoliticExposedPeople={isPoliticExposedPeople}
                        setAgreeDisplayedAsInvestor={setAgreeDisplayedAsInvestor}
                        setIsPoliticExposedPeople={setIsPoliticExposedPeople}
                    />
                )
            case 6:
                return (
                    <FormStepSix />
                )
            default: 1
        }
    }

    useEffect(() => {
        updateFormTitle()
    }, [updateFormTitle])

    return (

        <Container>
            <StatusBar style="dark" />
            <TouchableContainer>
                <ContentContainer
                    showsVerticalScrollIndicator={false}
                >
                    <HeaderContainer>
                        <ScreenTitle
                            pageTitle='Meus dados'
                            onCloseScreen={() => navigation.goBack()}
                        />
                    </HeaderContainer>
                    <TitleContainer>
                        <FormTitleProgress
                            formTitle={formTitle}
                            progress={registrationProgress}
                        />
                    </TitleContainer>
                    {renderForm()}
                </ContentContainer>
            </TouchableContainer>
            <StepController
                nextAction={handleNext}
                previousAction={handlePrevious}
                disabledPreviousButton={registrationProgress <= 0}
                isLastStep={registrationProgress >= 6}
                isFirstStep={registrationProgress <= 1}
            />
        </Container>
    )
}