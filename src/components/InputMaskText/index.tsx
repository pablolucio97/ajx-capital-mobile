import { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text';
import {
    Container,
    InputMaskFocusedStyle,
    InputMaskStyle,
    Label
} from './styles';

interface ITextInputMask extends MaskedTextInputProps {
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
            <MaskedTextInput
                ref={inputRef}
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                style={focused ? InputMaskFocusedStyle : InputMaskStyle}
                {...rest}
            />
        </Container>
    )
}