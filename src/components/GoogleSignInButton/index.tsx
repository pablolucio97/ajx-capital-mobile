import { TouchableOpacityProps, ActivityIndicator } from 'react-native'
import { Container, Title, ContentContainer } from './styles';
import { useTheme } from 'styled-components'
import { googleIcon } from '../../assets/svgs'
import { SvgXml } from 'react-native-svg'
interface ButtonProps extends TouchableOpacityProps {
    disabled?: boolean;
    loading?: boolean;
}

export function GoogleSignInButton({
    disabled,
    loading,
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
                        color={theme.colors.textDark}
                    />
                    :
                    <ContentContainer>
                        <SvgXml xml={googleIcon} />
                        <Title>Entrar com o Google</Title>
                    </ContentContainer>
            }
        </Container>
    )
}