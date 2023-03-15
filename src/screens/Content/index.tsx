import { Text } from 'components/Text';
import { PodcastCard } from 'components/PodcastCard'
import {
    Container,
    PodcastsListContainer,
    Subtitle,
    PodcastsContainer
} from './styles';
import { podcastsImages } from 'utils/mockedData';

export function Content() {

    return (
        <Container>
            <Text
                content='Conteúdo'
            />

            <PodcastsContainer>
                <Subtitle>
                    Podcasts
                </Subtitle>
            </PodcastsContainer>
            <PodcastsListContainer
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {podcastsImages.map(podcast => (
                    <PodcastCard
                        key={podcast}
                        imgPath={podcast}
                    />
                ))}
            </PodcastsListContainer>
        </Container>
    )
}