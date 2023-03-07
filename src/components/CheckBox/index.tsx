import React, { Dispatch, SetStateAction } from 'react';
import { Checkbox } from './styles'
import { useTheme } from 'styled-components'

interface CheckboxProps {
    value: boolean;
    onValueChange: Dispatch<SetStateAction<boolean>>
}

export function CheckBox({ onValueChange, value }: CheckboxProps) {

    const theme = useTheme()

    return (
        <Checkbox
            onValueChange={onValueChange}
            value={value}
            color={value ? theme.colors.primary : undefined}
        />
    )
}