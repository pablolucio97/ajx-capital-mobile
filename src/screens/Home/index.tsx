import { Container } from './styles';
import { BalanceCard } from 'components/BalanceCard';

export function Home() {
    return (
        <Container>
            <BalanceCard
                balance='16.000'
                profit='R$1.600,00'
                profitPercentage='10'
                balanceDecimal=',00'
            />
        </Container>
    )
}