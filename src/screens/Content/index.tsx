import { ContentCard } from 'components/ContentCard';
import { NewsCard } from 'components/NewsCard';
import { PodcastCard } from 'components/PodcastCard';
import {
    contentImages,
    newsImages,
    podcastsImages
} from 'utils/mockedData';
import {
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