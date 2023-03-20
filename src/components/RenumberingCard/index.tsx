import {
    BalanceTitle, Container, ContentContainer,
    RenumberingTitle,
    Text
} from './styles';

interface RenumberingCardProps {
    totalValue: string;
    accumulatedProfit: string;
}

export function RenumberingCard({ totalValue, accumulatedProfit }: RenumberingCardProps) {
    return (
        <Container>
            <ContentContainer>
                <Text>
                    Valor Bruto:
                </Text>
                <BalanceTitle>
                    {totalValue}
                </BalanceTitle>
            </ContentContainer>
            <ContentContainer>
                <Text>
                    Remuneração Acumulada:
                </Text>
                <RenumberingTitle>
                    {accumulatedProfit}
                </RenumberingTitle>
            </ContentContainer>
        </Container>
    )
}