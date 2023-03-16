import {
    Container,
    Image,
    Title,
    Text,
    ContainerImage
} from './styles';

interface AJXPlatinumCardProps {
    title: string;
    content: string;
    isImage: boolean
}

export function AJXPlatinumCard({ title, content, isImage }: AJXPlatinumCardProps) {
    return isImage ?
        (
            <ContainerImage
                activeOpacity={0.8}
            >
                <Image
                    source={{ uri: 'https://i.ibb.co/BKqqdcF/Mask-group.png' }}
                >
                    <Title>{title}</Title>
                    <Text>{content}</Text>
                </Image >
            </ContainerImage>
        ) :
        (
            <Container
                activeOpacity={0.8}
            >
                <Title>{title}</Title>
                <Text>{content}</Text>
            </Container>
        )

}