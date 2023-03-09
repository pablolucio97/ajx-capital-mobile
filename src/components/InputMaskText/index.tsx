import { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import MaskInput, { MaskInputProps } from 'react-native-mask-input'
import {
    Container,
    InputMaskFocusedStyle,
    InputMaskStyle,
    Label
} from './styles';

interface ITextInputMask extends MaskInputProps {
    label: string;
}

export function InputMaskText({ label, ...rest }: ITextInputMask) {

    const inputRef = useRef<TextInput>(null)

    const [focused, setFocused] = useState(false)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <Container>
            <Label>{label}</Label>
            <MaskInput
                ref={inputRef}
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                style={focused ? InputMaskFocusedStyle : InputMaskStyle}
                {...rest}
            />
        </Container>
    )
}