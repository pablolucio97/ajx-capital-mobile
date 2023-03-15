import { SvgXml } from 'react-native-svg';
import {
    penLoadingIcon,
    envelopeOpenIcon,
    bankNoteIcon
} from '../../assets/svgs'
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
    iconType: string;
}

export function NotificationCard({
    iconType,
    sentFrom,
    timeSinceSent,
    title
}: NotificationCardProps) {


    function renderIconType() {
        switch (iconType) {
            case 'data':
                return (
                    <SvgXml
                        xml={penLoadingIcon}
                        width={24}
                        height={24}
                    />
                )
            case 'payment':
                return (
                    <SvgXml
                        xml={envelopeOpenIcon}
                        width={24}
                        height={24}
                    />
                )
            case 'investment':
                return (
                    <SvgXml
                        xml={bankNoteIcon}
                        width={24}
                        height={24}
                    />
                )
            default: 'investment'
        }
    }

    return (
        <Container
            activeOpacity={0.88}
        >
            <TitleContainer>
                {renderIconType()}
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