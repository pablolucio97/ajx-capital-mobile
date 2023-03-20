import { arrowRightDark } from '../../assets/svgs';
import { SvgXml } from 'react-native-svg';
import * as Progress from 'react-native-progress'
import {
    Container,
    ContentContainer,
    TitleContainer,
    StrongText,
    Text,
    Title,
    Button,
    ButtonText,
    ErrorText,
    AdditionalContentContainer
} from './styles';

interface InvestmentCardProps {
    investmentPercentage: number;
    contributedValue: string;
    time: string;
    renumbering: string
    total: string
    progress: number;
    noDetectedInvestedValue?: boolean;
    onPress?: () => void;
    isNavigable?: boolean;
}

export function InvestmentCard({
    contributedValue,
    investmentPercentage,
    progress,
    renumbering,
    time,
    total,
    noDetectedInvestedValue,
    onPress,
    isNavigable = true
}: InvestmentCardProps) {

    const progressPercentage = progress / 100

    return (
        <Container
            onPress={onPress}
            activeOpacity={isNavigable ? 0.8 : 1}
        >
            <TitleContainer>
                <Title>CCB AJX CARBON  INVESTIMENTO ${investmentPercentage}%</Title>
                {
                    isNavigable &&
                    <SvgXml
                        xml={arrowRightDark}
                    />
                }
            </TitleContainer>
            <ContentContainer>
                <Text>Valor Aportado:</Text>
                <StrongText>{contributedValue}</StrongText>
            </ContentContainer>
            <ContentContainer>
                <Text>Prazo:</Text>
                <StrongText>{time}</StrongText>
            </ContentContainer>
            <ContentContainer>
                <Text>Remuneração:</Text>
                <StrongText>{renumbering}% ao Mês</StrongText>
            </ContentContainer>
            <Progress.Bar
                progress={progressPercentage}
                color='#3AC6F4'
                unfilledColor='#F8F8F8'
                borderWidth={0}
                height={12}
                borderRadius={8}
                width={280}
            />
            <ContentContainer>
                <Text>{progress}%</Text>
                <StrongText>{total}</StrongText>
            </ContentContainer>
            {noDetectedInvestedValue &&
                <AdditionalContentContainer>
                    <ErrorText>*Não Detectamos o Valor Investido</ErrorText>
                    <Button
                        activeOpacity={0.8}
                    >
                        <ButtonText>Efetuar Pagamento</ButtonText>
                    </Button>
                </AdditionalContentContainer>
            }
        </Container>
    )
}