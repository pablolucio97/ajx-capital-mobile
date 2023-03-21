import { useNavigation } from '@react-navigation/native';
import { leftArrowDark, logo } from '../../assets/svgs';
import { InvestmentCard } from 'components/InvestmentCard';
import { InvestmentResumeCard } from 'components/InvestmentResumeCard';
import { RenumberingCard } from 'components/RenumberingCard';
import { InvestmentGraphCard } from 'components/InvestmentGraphCard';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import {
    Button,
    Container,
    ContentContainer,
    HeaderContainer,
    LogoContainer,
    Title,
    TitleContainer
} from './styles';
import { InvestmentsGroupCard } from 'components/InvestmentsGroupCard';
import { graphData, selectGraphList } from 'utils/mockedData';

export function Investment() {

    const navigation = useNavigation()

    return (
        <Container>
            <StatusBar
                style='dark'
            />
            <ContentContainer
                showsVerticalScrollIndicator={false}
            >
                <HeaderContainer>
                    <TitleContainer>
                        <Button
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.8}
                        >
                            <SvgXml
                                xml={leftArrowDark}
                            />
                            <Title>CCB AJX CARBON  INVESTIMENTO 2%</Title>
                        </Button>
                    </TitleContainer>
                    <LogoContainer>
                        <SvgXml
                            xml={logo}
                            width={64}
                        />
                    </LogoContainer>
                </HeaderContainer>
                <RenumberingCard
                    accumulatedProfit='R$ 180,00'
                    totalValue='R$ 1.180,00'
                />
                <InvestmentGraphCard />
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
                {/* @ts-ignore */}
                <InvestmentsGroupCard
                    totalTimeInMonths={45}
                    currentTimeInMonths={32}
                    investment='R$ 1.000,00'
                    renumbering='R$ 600,00'
                    graphData={graphData}
                    selectData={selectGraphList}
                />
            </ContentContainer>
        </Container>
    )
}