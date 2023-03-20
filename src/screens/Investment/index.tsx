import { RenumberingCard } from 'components/RenumberingCard';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container } from './styles';

export function Investment() {
    return (
        <Container>
            <StatusBar
                style='dark'
            />
            <RenumberingCard
                accumulatedProfit='R$ 180,00'
                totalValue='R$ 1.180,00'
            />
        </Container>
    )
}