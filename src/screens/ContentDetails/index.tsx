import { useNavigation } from '@react-navigation/native';
import { Text } from 'components/Text';
import { Title } from 'components/Title';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import { contentDetailBackgroundImage } from 'utils/mockedData';
import { leftArrowLight } from '../../assets/svgs';
import {
    Button,
    Container,
    ContentContainer,
    ImageContainer,
    Styles
} from './styles';

export function ContentDetails() {

    const navigation = useNavigation()

    return (
        <Container>
            <StatusBar
                style='light'
            />
            <ImageContainer
                source={{ uri: contentDetailBackgroundImage }}
            >
                <Button
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.8}
                >
                    <SvgXml
                        xml={leftArrowLight}
                    />
                </Button>
            </ImageContainer>
            <ContentContainer>
                <Title
                    content='Thiago Nigro'
                    style={Styles.title}
                />
                <Text
                    content='Cras rhoncus lacus ac tempus pharetra. Sed facilisis lectus nec nisi sodales feugiat. Vivamus eu ipsum tortor. Duis sit amet tincidunt augue. Nunc ut egestas justo, maximus iaculis turpis. Proin vel urna ac lacus sagittis convallis. Sed vehicula orci augue, fermentum lacinia dolor facilisis vel. Cras sed mi eget odio iaculis elementum. Donec imperdiet eu mi at posuere.'
                    style={Styles.text}
                />
            </ContentContainer>
        </Container>
    )
}