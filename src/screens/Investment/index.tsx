import { InvestmentCard } from 'components/InvestmentCard';
import { InvestmentResumeCard } from 'components/InvestmentResumeCard';
import { RenumberingCard } from 'components/RenumberingCard';
import { StatusBar } from 'expo-status-bar';
import { Container, ContentContainer } from './styles';

export function Investment() {
    return (
        <Container>
            <StatusBar
                style='dark'
            />
            <ContentContainer
                showsVerticalScrollIndicator={false}
            >
                <RenumberingCard
                    accumulatedProfit='R$ 180,00'
                    totalValue='R$ 1.180,00'
                />
                <InvestmentCard
                    contributedValue='R$ 564.000,00'
                    investmentPercentage={2}
                    progress={56}
                    renumbering='2,0'
                    time='18 Meses'
                    total='R$ 1.000.000,00'
                    isNavigable={false}
                />
                <InvestmentResumeCard
                    accumulatedProfit='R$ 1.180,00'
                    contributionDate='10 / 02 / 23 | 15:29'
                    paymentMethod='Boleto'
                    paymentStatus='Pago'
                    investmentValue='R$ 1.000,00'
                />
            </ContentContainer>
        </Container>
    )
}