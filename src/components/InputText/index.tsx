import { useRef, useEffect, useState } from 'react'
import { TextInputProps, TextInput } from 'react-native';
import { Container, Label, TextInputEl, FocusedStyle } from './styles';

interface ITextInput extends TextInputProps {
    label: string;
}

export function InputText({ label, ...rest }: ITextInput) {

    const inputRef = useRef<TextInput>(null)
    const [focus, setFocus] = useState(false)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <Container>
            <Label>{label}</Label>
            {/* @ts-ignore */}
            <TextInputEl
                ref={inputRef}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                style={focus && FocusedStyle}
                {...rest}
            />
        </Container>
    )
}