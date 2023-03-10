import { MenuCard } from 'components/MenuCard';
import { UserProfileCard } from 'components/UserProfileCard';
import { StatusBar } from 'expo-status-bar';
import {
    Container,
    Styles,
    TextContainer,
    SvgContainer,
    ContentContainer
} from './styles';
import { Text } from 'components/Text'
import { SvgXml } from 'react-native-svg'
import { logoOpac } from '../../assets/svgs';

export function Profile() {

    const avatarImage = 'https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'

    return (
        <Container>
            <StatusBar style="dark" />
            <ContentContainer
                showsVerticalScrollIndicator={false}
            >
                <UserProfileCard
                    userName='Ana Paula Matinezi'
                    userEmail='anamartinezi@gmail.com'
                    userAvatar={avatarImage}
                    progress={.7}
                    style={Styles.userProfileCard}
                />
                <MenuCard />
                <TextContainer>
                    <Text
                        content='Integer augue elit, lacinia ac volutpat eget, tristique eget nunc. Mauris non purus molestie, efficitur odio euismod, egestas sapien.'
                        style={Styles.text}
                    />
                    <SvgContainer>
                        <SvgXml
                            xml={logoOpac}
                        />
                    </SvgContainer>
                </TextContainer>
            </ContentContainer>
        </Container>
    )
}