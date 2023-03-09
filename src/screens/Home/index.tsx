import { UserProfileCard } from 'components/UserProfileCard';
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';

export function Home() {

    const avatarImage = 'https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'

    return (
        <Container>
            <StatusBar style="auto" />
            <UserProfileCard
                userName='Ana Paula Matinezi'
                userEmail='anamartinezi@gmail.com'
                userAvatar={avatarImage}
                progress={.7}
            />
        </Container>
    )
}