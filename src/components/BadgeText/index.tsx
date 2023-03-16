import { Container, Text } from './styles';

interface BadgeTextProps {
    content: string;
    onPress?: () => void;
}

export function BadgeText({ content, onPress }: BadgeTextProps) {
    return (
        <Container
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text>{content}</Text>
        </Container>
    )
}