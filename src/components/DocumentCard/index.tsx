import {
    Container,
    DocumentImage,
    DocumentText,
    DocumentTitle,
    DocumentTextContainer,
    DataContainer,
    Indicator,
    IndicatorContainer
} from './styles';

interface DocumentCardProps {
    document: string;
    documentImage: string;
    status: string;
}

export function DocumentCard({
    document,
    documentImage,
    status
}: DocumentCardProps) {
    return (
        <Container>
            <DataContainer>
                <DocumentImage
                    source={{ uri: documentImage }}
                />
                <DocumentTextContainer>
                    <DocumentText>Documento:</DocumentText>
                    <DocumentText>Status:</DocumentText>
                </DocumentTextContainer>
                <DocumentTextContainer>
                    <DocumentTitle>{document}</DocumentTitle>
                    <DocumentTitle>{status}</DocumentTitle>
                </DocumentTextContainer>
            </DataContainer>
            <IndicatorContainer>
                <Indicator />
                <Indicator />
                <Indicator />
            </IndicatorContainer>
        </Container>
    )
}