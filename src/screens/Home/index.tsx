import { useNavigation } from '@react-navigation/native';
import { AJXPlatinumCard } from 'components/AJXPlatinumCard';
import { BalanceCard } from 'components/BalanceCard';
import { InvestmentCard } from 'components/InvestmentCard';
import { Text } from 'components/Text';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import { logo } from '../../assets/svgs';
import {
    Container,
    GreetUserContainer,
    HeaderContainer,
    HorizontalScrollContainer,
    ScrollContainer,
    UserNameText
} from './styles';

export function Home() {

    const navigation = useNavigation()

    return (
        <Container>
            <StatusBar
                style='dark'
            />
            <ScrollContainer
                showsVerticalScrollIndicator={false}
            >
                <HeaderContainer>
                    <GreetUserContainer>
                        <Text
                            content='Bem vindo,'
                        />
                        <UserNameText>
                            Ana Paula
                        </UserNameText>
                    </GreetUserContainer>
                    <SvgXml
                        xml={logo}
                        width={64}
                    />
                </HeaderContainer>
                <BalanceCard
                    balance='16.000'
                    profit='R$1.600,00'
                    profitPercentage='10'
                    balanceDecimal=',00'
                />
                <HorizontalScrollContainer
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <AJXPlatinumCard
                        title='AJX Plátinum'
                        content='Experimente nosso novo Investimento CBB'
                        isImage
                    />
                    <AJXPlatinumCard
                        title='AJX Plátinum'
                        content='Experimente nosso novo Investimento CBB'
                        isImage={false}
                    />
                </HorizontalScrollContainer>
                <InvestmentCard
                    contributedValue='R$ 564.000,00'
                    investmentPercentage={2}
                    progress={56}
                    renumbering='2,0'
                    time='18 Meses'
                    total='R$ 1.000.000,00'
                    onPress={() => navigation.navigate('Investimentos' as never)}
                />
                <InvestmentCard
                    contributedValue='R$ 564.000,00'
                    investmentPercentage={2}
                    progress={56}
                    renumbering='2,0'
                    time='18 Meses'
                    total='R$ 1.000.000,00'
                    onPress={() => navigation.navigate('Investimentos' as never)}
                    noDetectedInvestedValue
                />
            </ScrollContainer>
        </Container>
    )
}