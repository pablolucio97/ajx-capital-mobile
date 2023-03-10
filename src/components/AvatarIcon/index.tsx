
import { Container, Image } from './styles'

interface AvatarIconProps {
    imgUrl: string;
    isActive?: boolean;
}

export function AvatarIcon({ imgUrl, isActive }: AvatarIconProps) {

    if (isActive) {
        return (
            <Container>
                <Image
                    source={{ uri: imgUrl }}
                />
            </Container>
        )
    }

    return <Image source={{ uri: imgUrl }} />
}
