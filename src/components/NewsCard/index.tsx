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
    onPress?: () => void;
}

export function NewsCard({
    imgPath,
    totalVideos,
    author,
    onPress
}: NewsCardProps) {
    return (
        <Container
            activeOpacity={0.8}
            onPress={onPress}
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