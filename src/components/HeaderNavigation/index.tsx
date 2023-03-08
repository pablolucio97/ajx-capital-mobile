import { Container, Title, BackButton, ContentContainer } from './styles';
import { Feather } from '@expo/vector-icons'
import { CSSProperties, useTheme } from 'styled-components';
import {useNavigation} from '@react-navigation/native'

interface HeaderProps {
    title: string;
    style?: CSSProperties;
}

export function HeaderNavigation({
    title,
    style
}: HeaderProps) {

    const theme = useTheme()
    const navigation = useNavigation()

    return (
        <Container
            //@ts-ignore
            style={style}
        >
            <BackButton
                onPress={() => navigation.goBack()}
                activeOpacity={.8}
            >
                <Feather
                    name='arrow-left'
                    size={40}
                    color={theme.colors.textDark}
                />
            </BackButton>
            <ContentContainer>
                <Title>
                    {title}
                </Title>
            </ContentContainer>
        </Container>
    )
}