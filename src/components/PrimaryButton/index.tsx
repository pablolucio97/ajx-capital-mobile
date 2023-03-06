import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native'
import { Container, Title } from './styles';
import { useTheme } from 'styled-components'

interface ButtonProps extends TouchableOpacityProps {
    disabled?: boolean;
    loading?: boolean;
    title: string;
}

export function PrimaryButton({
    disabled,
    loading,
    title,
    ...rest
}: ButtonProps) {

    const theme = useTheme()

    return (
        //@ts-ignore
        <Container
            activeOpacity={.88}
            disabled={disabled!}
            {...rest}
        >
            {
                loading ?
                    <ActivityIndicator
                        size='small'
                        color={theme.colors.backgroundLight}
                    />
                    :
                    <Title>{title}</Title>
            }
        </Container>
    )
}