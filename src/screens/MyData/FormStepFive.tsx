import { InputMaskText } from 'components/InputMaskText';
import { SelectPicker } from 'components/SelectPicker';
import React, { Dispatch, SetStateAction } from 'react';
import { Masks } from 'react-native-mask-input';
import {
    investorProfiles,
    patrimoniesValuesToInvest,
    segmentsToInvest
} from 'utils/mockedData';
import { FormContainer } from './styles';


interface FormStepFiveProps {
    setBestProfileStituation: Dispatch<SetStateAction<string>>;
    setMainSegmentToInvest: Dispatch<SetStateAction<string>>;
    setPatrimonyToInvest: Dispatch<SetStateAction<string>>;
    monthlyIncome: string;
    setMonthlyIncome: Dispatch<SetStateAction<string>>;
    totalPatrimony: string;
    setTotalPatrimony: Dispatch<SetStateAction<string>>;
}

export function FormStepFive({
    monthlyIncome,
    setBestProfileStituation,
    setMainSegmentToInvest,
    setMonthlyIncome,
    setPatrimonyToInvest,
    setTotalPatrimony,
    totalPatrimony
}: FormStepFiveProps) {

    return (
        <FormContainer>
            <SelectPicker
                label='Qual situação melhor se encaixa ao seu perfil em relação a investimento ? (opcional)'
                defaultButtonText=' '
                data={investorProfiles}
                onSelect={(selectedItem) => {
                    setBestProfileStituation(selectedItem)
                }}
            />
            <SelectPicker
                label='Qual o principal segmento você tem interesse em investir? (opcional)'
                defaultButtonText=' '
                data={segmentsToInvest}
                onSelect={(selectedItem) => {
                    setMainSegmentToInvest(selectedItem)
                }}
            />
            <SelectPicker
                label='Quanto do seu patrimônio você está disposto a investir ? (opcional)'
                defaultButtonText=' '
                data={patrimoniesValuesToInvest}
                onSelect={(selectedItem) => {
                    setPatrimonyToInvest(selectedItem)
                }}
            />
            <InputMaskText
                label='Informe sua renda mensal'
                mask={Masks.BRL_CURRENCY}
                value={monthlyIncome}
                onChangeText={setMonthlyIncome}
                keyboardType='numeric'
            />
            <InputMaskText
                label='Informe o valor do seu patrimônio'
                mask={Masks.BRL_CURRENCY}
                value={totalPatrimony}
                onChangeText={setTotalPatrimony}
                keyboardType='numeric'
            />
        </FormContainer>
    )
}