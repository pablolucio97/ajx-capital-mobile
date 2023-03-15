import { InputMaskText } from 'components/InputMaskText';
import { InputText } from 'components/InputText';
import React, { Dispatch, SetStateAction } from 'react';
import { Masks } from 'react-native-mask-input';
import { FormContainer } from './styles';


interface FormStepOneProps {
    street: string;
    setStreet: Dispatch<SetStateAction<string>>;
    cep: string;
    setCep: Dispatch<SetStateAction<string>>;
    residenceNumber: string;
    setResidenceNumber: Dispatch<SetStateAction<string>>;
    neighborhood: string;
    setNeighborhood: Dispatch<SetStateAction<string>>;
    city: string;
    setCity: Dispatch<SetStateAction<string>>;
}

export function FormStepTwo({
    street,
    setStreet,
    cep,
    setCep,
    city,
    setCity,
    neighborhood,
    setNeighborhood,
    residenceNumber,
    setResidenceNumber
}: FormStepOneProps) {

    return (
        <FormContainer>
            <InputMaskText
                label='CEP'
                mask={Masks.ZIP_CODE}
                value={cep}
                onChangeText={setCep}
                keyboardType='numeric'
                autoFocus
            />
            <InputText
                label='Rua'
                value={street}
                onChangeText={setStreet}
            />
            <InputText
                label='Número'
                value={residenceNumber}
                onChangeText={setResidenceNumber}
                keyboardType='numeric'
            />
            <InputText
                label='Bairro'
                value={neighborhood}
                onChangeText={setNeighborhood}
            />
            <InputText
                label='Cidade'
                value={city}
                onChangeText={setCity}
            />
        </FormContainer>
    )
}