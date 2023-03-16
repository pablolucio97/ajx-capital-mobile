import { AJXPlatinumCard } from 'components/AJXPlatinumCard';
import { BadgeText } from 'components/BadgeText';
import { ContentCard } from 'components/ContentCard';
import { NewsCard } from 'components/NewsCard';
import { PodcastCard } from 'components/PodcastCard';
import {
    contentImages,
    newsImages,
    podcastsImages
} from 'utils/mockedData';
import {
    BadgesContainer,
    Container,
    ContentContainer,
    HorizontalScrollContainer,
    Subtitle
} from './styles';

export function Content() {

    return (
        <Container>
            <ContentContainer
                showsVerticalScrollIndicator={false}
            >
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