import { Container, Avatar, TextContainer, Styles } from './styles';
import * as Progress from 'react-native-progress'
import { Text } from 'components/Text'
import { Title } from 'components/Title'
import { CSSProperties } from 'styled-components';

interface UserProfileCardProps {
    userName: string
    userEmail: string
    userAvatar: string;
    progress: number;
    style?: CSSProperties;
}

export function UserProfileCard({
    userName,
    userEmail,
    userAvatar,
    progress,
    style
}: UserProfileCardProps) {

    return (
        <Container
            //@ts-ignore
            style={style}
        >
            <Avatar
                source={{ uri: userAvatar }}
            />
            <TextContainer>
                <Title
                    content={userName}
                />
                <Text
                    content={userEmail}
                />
            </TextContainer>
            <Progress.Circle
                progress={progress}
                size={50}
                thickness={6}
                borderColor='transparent'
                color='#3AC6F4'
                unfilledColor='#F1F1F1'
                showsText
                textStyle={Styles.progressText}
                strokeCap='round'
            />
        </Container>
    )
}