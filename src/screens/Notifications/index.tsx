import React from 'react';
import { Container } from './styles';
import { NotificationCard } from 'components/NotificationCard'
import { penLoadingIcon } from '../../assets/svgs'

export function Notifications() {
    return (
        <Container>
            <NotificationCard
                iconXml={penLoadingIcon}
                timeSinceSent='2 minutos atrás'
                sentFrom='Sistema'
                title='Seu investimentou renumerou ❤'
            />
        </Container>
    )
}