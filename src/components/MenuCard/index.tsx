/* eslint-disable @typescript-eslint/no-empty-function */
import {
    Container,
    DataContainer,
    ContentContainer,
    NotificationContainer,
    NotificationBadge,
    Divider,
    Text,
    Styles,
    TextContainer
} from './styles';
import {
    bellNotification,
    info,
    logout,
    shield,
    userProfile
} from '../../assets/svgs'
import { SvgXml } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native';

export function MenuCard() {

    const navigation = useNavigation()


    const data = [
        { icon: bellNotification, content: 'Notifcações', hasUpdates: true, onPress: () => { } },
        {
            icon: userProfile, content: 'Meus Dados', hasUpdates: true,
            onPress: () => navigation.navigate('Meus Dados' as never)
        },
        { icon: shield, content: 'Segurança', hasUpdates: false, onPress: () => { } },
        { icon: info, content: 'FAQ', hasUpdates: false, onPress: () => { } },
        { icon: logout, content: 'Sair', hasUpdates: false, onPress: () => { } },
    ]

    return (
        <Container>
            {
                data.map((item, i) => (
                    <ContentContainer
                        key={item.content}
                        activeOpacity={.8}
                        onPress={item.onPress}
                    >
                        <DataContainer >
                            <TextContainer>
                                <SvgXml
                                    width={32}
                                    height={32}
                                    xml={item.icon}
                                />
                                <Text
                                    style={Styles.textTitle}
                                >
                                    {item.content}
                                </Text>
                            </TextContainer>
                            {
                                item.hasUpdates &&
                                <NotificationContainer>
                                    <NotificationBadge />
                                </NotificationContainer>
                            }
                        </DataContainer>
                        {
                            i <= 3 && < Divider />
                        }
                    </ContentContainer>
                ))
            }
        </Container>
    )
}

