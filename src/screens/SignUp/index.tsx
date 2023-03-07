import { Title } from 'components/Title';
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';

export function SignUp() {
    return (
        <Container>
            <StatusBar style="light" />
            <Title
                content='Cadastro'
            />
        </Container>
    )
}