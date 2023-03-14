import { SvgXml } from 'react-native-svg';
import {
    Container,
    Text,
    TextContainer,
    Title,
    TitleContainer
} from './styles';

interface NotificationCardProps {
    title: string;
    sentFrom: string;
    timeSinceSent: string;
    iconXml: string;
}

export function NotificationCard({
    iconXml,
    sentFrom,
    timeSinceSent,
    title
}: NotificationCardProps) {
    return (
        <Container>
            <TitleContainer>
                <SvgXml
                    xml={iconXml}
                    width={24}
                    height={24}
                />
                <Title>{title}</Title>
            </TitleContainer>
            <TextContainer>
                <Text>
                    {sentFrom}
                </Text>
                <Text>
                    {timeSinceSent}
                </Text>
            </TextContainer>
        </Container>
    )
}