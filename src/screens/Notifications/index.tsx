import React from 'react';
import { Container, HeaderContainer, Styles } from './styles';
import { NotificationCard } from 'components/NotificationCard'
import { FlatList } from 'react-native';
import { notifications } from 'utils/mockedData';
import { ScreenTitle } from 'components/ScreenTitle';
import { useNavigation } from '@react-navigation/native'

export function Notifications() {

    const navigation = useNavigation()

    return (
        <Container>
            <HeaderContainer>
                <ScreenTitle
                    pageTitle='Notificações'
                    onCloseScreen={() => navigation.goBack()}
                />
            </HeaderContainer>
            <FlatList
                data={notifications}
                renderItem={({ item }) => (
                    <NotificationCard
                        iconType={item.iconType}
                        timeSinceSent={item.timeSinceSent}
                        sentFrom={item.sentFrom}
                        title={item.title}
                    />
                )}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                style={Styles.flatlistStyle}
            />
        </Container>
    )
}