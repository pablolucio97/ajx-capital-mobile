import { SvgXml } from 'react-native-svg';
import { favoritedIcon, favoriteIcon } from '../../assets/svgs';
import {
    Container,
    ContentContainer,
    FavoriteButton,
    Image,
    Text,
    Title
} from './styles';

interface FavoriteContentCardProps {
    imgPath: string;
    title: string;
    author: string;
    isFavorited: boolean;
}

export function FavoriteContentCard({
    imgPath,
    title,
    author,
    isFavorited
}: FavoriteContentCardProps) {
    return (
        <Container>
            <Image
                source={{ uri: imgPath }}
            />
            <ContentContainer>
                <Title>{title}</Title>
                <Text>{author}</Text>
            </ContentContainer>
            {
                isFavorited ?
                    <FavoriteButton
                        activeOpacity={0.8}
                    >
                        <SvgXml
                            xml={favoritedIcon}
                            width={21}
                            height={30}
                        />
                    </FavoriteButton>
                    :
                    <FavoriteButton
                        activeOpacity={0.8}
                    >
                        <SvgXml
                            xml={favoriteIcon}
                        />
                    </FavoriteButton>
            }
        </Container>
    )
}