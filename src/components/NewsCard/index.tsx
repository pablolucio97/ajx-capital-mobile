import {
    Text,
    Container,
    Image,
    Title
} from './styles';


interface NewsCardProps {
    imgPath: string;
    author: string;
    totalVideos: number
}

export function NewsCard({
    imgPath,
    totalVideos,
    author
}: NewsCardProps) {
    return (
        <Container
            activeOpacity={0.8}
        >
            <Image
                source={{ uri: imgPath }}
            />
            <Title>{author}</Title>
            <Text>{
                totalVideos < 10 ?
                    totalVideos
                        .toString()
                        .concat('0')
                        .split('')
                        .reverse()
                    :
                    totalVideos
            } Vídeos
            </Text>
        </Container>
    )
}