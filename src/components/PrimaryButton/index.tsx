import { TouchableOpacityProps, ActivityIndicator } from 'react-native'
import { Container, Title } from './styles';
import { useTheme } from 'styled-components'

interface ButtonProps extends TouchableOpacityProps {
    disabled?: boolean;
    loading?: boolean;
    title: string;
    bgColor?: string;
}

export function PrimaryButton({
    disabled,
    loading,
    bgColor,
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
            bgColor={bgColor}
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