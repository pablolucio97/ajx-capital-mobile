import {
    AdditionalContentContainer,
    Button,
    ButtonText,
    Container,
    ContentContainer,
    BalanceText,
    StrongText,
    Text,
    Title,
    TitleContainer
} from './styles';

interface InvestmentResumeCardProps {
    investmentValue: string;
    paymentMethod: string;
    contributionDate: string;
    onDownloadContract?: () => void;
    paymentStatus: string;
    accumulatedProfit: string
}

export function InvestmentResumeCard({
    contributionDate,
    investmentValue,
    paymentMethod,
    paymentStatus,
    onDownloadContract,
    accumulatedProfit
}: InvestmentResumeCardProps) {

    return (
        <Container>
            <TitleContainer>
                <Title>Investimentos</Title>
            </TitleContainer>
            <ContentContainer>
                <Text>Vlr do Investimento:</Text>
                <StrongText>{investmentValue}</StrongText>
            </ContentContainer>
            <ContentContainer>
                <Text>Forma de Pagamento:</Text>
                <StrongText>{paymentMethod}</StrongText>
            </ContentContainer>
            <ContentContainer>
                <Text>Data do Aporte:</Text>
                <StrongText>{contributionDate}</StrongText>
            </ContentContainer>
            <ContentContainer>
                <Text>Status de Pagamento:</Text>
                <StrongText>{paymentStatus}</StrongText>
            </ContentContainer>
            <ContentContainer>
                <Text>Remuneração Acum.:</Text>
                <BalanceText>{accumulatedProfit}</BalanceText>
            </ContentContainer>

            <AdditionalContentContainer>
                <Button
                    activeOpacity={0.8}
                    onPress={onDownloadContract}
                >
                    <ButtonText>Baixar Contrato</ButtonText>
                </Button>
            </AdditionalContentContainer>
        </Container>
    )
}