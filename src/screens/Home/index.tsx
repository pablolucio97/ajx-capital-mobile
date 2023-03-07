import { Title } from 'components/Title';
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';

export function Home() {
    return (
        <Container>
            <StatusBar style="auto" />
            <Title
                content='Home'
            />
        </Container>
    )
}