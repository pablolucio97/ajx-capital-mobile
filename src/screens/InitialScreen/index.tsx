import { Title } from 'components/Title';
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';

export function InitialScreen() {
    return (
        <Container>
            <StatusBar style="auto" />
            <Title
                content='Tela inicial'
            />
        </Container>
    )
}