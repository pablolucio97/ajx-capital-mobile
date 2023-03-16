import {
    AuthorText,
    Container,
    Image,
    Title
} from './styles';

interface ContentCardProps {
    imgPath: string;
    author: string;
    title: string
}

export function ContentCard({
    imgPath,
    title,
    author
}: ContentCardProps) {
    return (
        <Container
            activeOpacity={0.8}
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