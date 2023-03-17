import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { leftArrowDark } from '../../assets/svgs';
import { Button, Container, HeaderContainer, Title } from './styles';
import { FlatList } from 'react-native'
import { FavoriteContentCard } from 'components/FavoriteContentCard';
import { favoritePodcastsList } from 'utils/mockedData';
import { StatusBar } from 'expo-status-bar';

export function Favorites() {

    const navigation = useNavigation()

    return (
        <Container>
            <StatusBar
                style='dark'
            />
            <HeaderContainer>
                <Button
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.8}
                >
                    <SvgXml
                        xml={leftArrowDark}
                    />
                    <Title>Favoritos</Title>
                </Button>
            </HeaderContainer>
            <FlatList
                data={favoritePodcastsList}
                renderItem={({ item }) => (
                    <FavoriteContentCard
                        title={item.title}
                        author={item.author}
                        isFavorited={item.isFavorite}
                        imgPath={item.image}
                    />
                )}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}