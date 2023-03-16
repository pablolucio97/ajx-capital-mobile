import { useNavigation } from '@react-navigation/native';
import { AJXPlatinumCard } from 'components/AJXPlatinumCard';
import { BadgeText } from 'components/BadgeText';
import { ContentCard } from 'components/ContentCard';
import { NewsCard } from 'components/NewsCard';
import { PodcastCard } from 'components/PodcastCard';
import { SearchInput } from 'components/SearchInput';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import {
    contentImages,
    newsImages,
    podcastsImages
} from 'utils/mockedData';
import { favoriteIcon, logo } from '../../assets/svgs';
import {
    BadgesContainer,
    Button,
    ButtonContainer,
    Container,
    ContentContainer,
    HeaderContainer,
    HorizontalScrollContainer,
    InputContainer,
    LogoContainer,
    SearchContainer,
    Subtitle,
    Title,
    TitleContainer,
    TitleHeaderContdainer
} from './styles';

export function Content() {

    const navigation = useNavigation()

    return (
        <Container>
            <StatusBar
                style='dark'
            />
            <ContentContainer
                showsVerticalScrollIndicator={false}
            >
                <HeaderContainer>
                    <TitleHeaderContdainer>
                        <TitleContainer>
                            <Title>Conteúdos</Title>
                        </TitleContainer>
                        <LogoContainer>
                            <SvgXml
                                xml={logo}
                                width={64}
                                height={54}
                            />
                        </LogoContainer>
                    </TitleHeaderContdainer>
                </HeaderContainer>
                <SearchContainer>
                    <InputContainer>
                        <SearchInput
                            placeholder='O que você procura?'
                        />
                    </InputContainer>
                    <ButtonContainer>
                        <Button
                            activeOpacity={0.64}
                        >
                            <SvgXml
                                xml={favoriteIcon}
                            />
                        </Button>
                    </ButtonContainer>
                </SearchContainer>
                <BadgesContainer>
                    <BadgeText
                        content='Investimentos'
                    />
                    <BadgeText
                        content='Empreendedor'
                    />
                    <BadgeText
                        content='Tecnologia'
                    />
                </BadgesContainer>
                <HorizontalScrollContainer
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {contentImages.map(content => (
                        <ContentCard
                            key={content.title}
                            imgPath={content.image}
                            author={content.author}
                            title={content.title}
                            onPress={() => navigation.navigate('Detalhes conteúdo' as never)}
                        />
                    ))}
                </HorizontalScrollContainer>
                <Subtitle>
                    Novidades
                </Subtitle>
                <HorizontalScrollContainer
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {newsImages.map(news => (
                        <NewsCard
                            key={news.author}
                            imgPath={news.image}
                            author={news.author}
                            totalVideos={news.numberOfVideos}
                        />
                    ))}
                </HorizontalScrollContainer>
                <HorizontalScrollContainer
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <AJXPlatinumCard
                        title='AJX Plátinum'
                        content='Experimente nosso novo Investimento CBB'
                        isImage
                    />
                    <AJXPlatinumCard
                        title='AJX Plátinum'
                        content='Experimente nosso novo Investimento CBB'
                        isImage={false}
                    />
                </HorizontalScrollContainer>
                <Subtitle>
                    Podcasts
                </Subtitle>
                <HorizontalScrollContainer
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {podcastsImages.map(podcast => (
                        <PodcastCard
                            key={podcast}
                            imgPath={podcast}
                        />
                    ))}
                </HorizontalScrollContainer>
            </ContentContainer>
        </Container>
    )
}