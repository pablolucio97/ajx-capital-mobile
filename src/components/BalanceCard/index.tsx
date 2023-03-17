import {
    Container,
    BalanceText,
    BalanceTitle,
    ContentContainer,
    Text,
    TextPlaceholder,
    BalanceContentContainer,
    BalanceLowTitle
} from './styles';

interface BalanceCardProps {
    balance: string;
    balanceDecimal: string;
    profit: string;
    profitPercentage: string
}

export function BalanceCard({
    balance,
    balanceDecimal,
    profit,
    profitPercentage
}: BalanceCardProps) {
    return (
        <Container>
            <ContentContainer>
                <Text>
                    Saldo Bruto
                </Text>
                <TextPlaceholder>
                    Total das Aplicações
                </TextPlaceholder>
            </ContentContainer>
            <BalanceContentContainer>
                <BalanceLowTitle>
                    R$
                </BalanceLowTitle>
                <BalanceTitle>
                    {balance}
                </BalanceTitle>
                <BalanceLowTitle>
                    {balanceDecimal}
                </BalanceLowTitle>
            </BalanceContentContainer>
            <ContentContainer>
                <BalanceText>
                    {profit}
                </BalanceText>
                <TextPlaceholder>
                    {profitPercentage}% de Rendimento
                </TextPlaceholder>
            </ContentContainer>
        </Container>
    )
}