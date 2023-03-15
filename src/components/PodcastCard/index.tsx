import { Container, Image } from './styles';

interface PodcastCardProps {
    imgPath: string;
    height?: number;
    width?: number;
}

export function PodcastCard({
    imgPath,
    width = 124,
    height = 124
}: PodcastCardProps) {
    return (
        <Container
            activeOpacity={0.8}
        >
            <Image
                source={{ uri: imgPath }}
                style={{
                    width,
                    height
                }}
            />
        </Container>
    )
}