import {
    AuthorText,
    Container,
    Image,
    Title
} from './styles';

interface ContentCardProps {
    imgPath: string;
    author: string;
    title: string;
    onPress?: () => void;
}

export function ContentCard({
    imgPath,
    title,
    author,
    onPress
}: ContentCardProps) {
    return (
        <Container
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Image
                source={{ uri: imgPath }}
            >
                <AuthorText>{author}</AuthorText>
                <Title>{title}</Title>
            </Image>
        </Container>
    )
}