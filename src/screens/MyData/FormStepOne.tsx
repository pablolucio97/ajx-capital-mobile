import { InputMaskText } from 'components/InputMaskText';
import { InputText } from 'components/InputText';
import { SelectPicker } from 'components/SelectPicker';
import React, { Dispatch, SetStateAction } from 'react';
import { Masks } from 'react-native-mask-input';
import { rgMask } from 'utils/masks';
import { countries, genders } from 'utils/mockedData';
import { FormContainer } from './styles';


interface FormStepOneProps {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    birthDate: string;
    setBirthDate: Dispatch<SetStateAction<string>>;
    cpf: string;
    setCpf: Dispatch<SetStateAction<string>>;
    rg: string;
    setRg: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    phone: string;
    setPhone: Dispatch<SetStateAction<string>>;
    setCivilState: Dispatch<SetStateAction<string>>;
    setGender: Dispatch<SetStateAction<string>>;
}

export function FormStepOne({
    name,
    setName,
    birthDate,
    setBirthDate,
    cpf,
    setCpf,
    email,
    setEmail,
    phone,
    setPhone,
    rg,
    setRg,
    setGender,
    setCivilState
}: FormStepOneProps) {

    return (
        <FormContainer>
            <InputText
                label='Nome Completo'
                value={name}
                onChangeText={setName}
                autoFocus
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
                defaultButtonText=' '
                data={countries}
                onSelect={(selectedItem) => {
                    setCivilState(selectedItem)
                }}
            />
            <SelectPicker
                label='Gênero'
                defaultButtonText=' '
                data={genders}
                onSelect={(selectedItem) => {
                    setGender(selectedItem)
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
        </FormContainer>
    )
}