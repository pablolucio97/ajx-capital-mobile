import { InputText } from 'components/InputText';
import React, { Dispatch, SetStateAction } from 'react';
import { FormContainer } from './styles';


interface FormStepThreeProps {
    occupation: string;
    setOccupation: Dispatch<SetStateAction<string>>;
    enterpriseName: string;
    setEnterpriseName: Dispatch<SetStateAction<string>>;
    position: string;
    setPosition: Dispatch<SetStateAction<string>>;
}

export function FormStepThree({
    occupation,
    setOccupation,
    position,
    setPosition,
    enterpriseName,
    setEnterpriseName,
}: FormStepThreeProps) {

    return (
        <FormContainer>
            <InputText
                label='Ocupação'
                value={occupation}
                onChangeText={setOccupation}
            />
            <InputText
                label='Nome da empresa (opcional)'
                value={enterpriseName}
                onChangeText={setEnterpriseName}
            />
          
            <InputText
                label='Cargo (opcional)'
                value={position}
                onChangeText={setPosition}
            />
        </FormContainer>
    )
}