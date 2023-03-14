import React, { Dispatch, SetStateAction } from 'react';
import { Checkbox as CheckBox } from './styles'
import { useTheme } from 'styled-components'

interface CheckboxProps {
    value: boolean;
    onValueChange: Dispatch<SetStateAction<boolean>>
}

export function Checkbox({ onValueChange, value }: CheckboxProps) {

    const theme = useTheme()

    return (
        <CheckBox
            onValueChange={onValueChange}
            value={value}
            color={value ? theme.colors.primary : undefined}
        />
    )
}