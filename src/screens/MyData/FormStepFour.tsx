import { InputMaskText } from 'components/InputMaskText';
import { SelectPicker } from 'components/SelectPicker';
import React, { Dispatch, SetStateAction } from 'react';
import { accountMask, agencyMask } from 'utils/masks';
import { banks } from 'utils/mockedData';
import { FormContainer } from './styles';


interface FormStepFourProps {
    agency: string;
    setAgency: Dispatch<SetStateAction<string>>;
    account: string;
    setAccount: Dispatch<SetStateAction<string>>;
    setBank: Dispatch<SetStateAction<string>>;
}

export function FormStepFour({
    agency,
    setAgency,
    account,
    setAccount,
    setBank
}: FormStepFourProps) {

    return (
        <FormContainer>
            <InputMaskText
                label='Agência sem dígito'
                mask={agencyMask}
                value={agency}
                onChangeText={setAgency}
                keyboardType='numeric'
                autoFocus
            />
            <InputMaskText
                label='Conta com dígito'
                mask={accountMask}
                value={account}
                onChangeText={setAccount}
                keyboardType='numeric'
            />
            <SelectPicker
                label='Banco'
                defaultButtonText=' '
                data={banks}
                onSelect={(selectedItem) => {
                    setBank(selectedItem)
                }}
            />
        </FormContainer>
    )
}