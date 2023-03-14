import { DocumentCard } from 'components/DocumentCard';
import { Subtitle } from 'components/Subtitle';
import { documentImages } from 'utils/mockedData';
import { IDocument } from 'interfaces/mockedData'
import {
    DocumentsContainer,
    DocumentsList,
    FormContainer,
    UploadDocumentButton,
    UploadDocumentButtonText
} from './styles';

interface FormStepSixProps {
    uploadDocument?: () => void;
    documentList?: string[];
}

export function FormStepSix({
    uploadDocument,
    documentList
}: FormStepSixProps) {


    return (
        <>
            <FormContainer>
                <UploadDocumentButton
                    activeOpacity={0.8}
                    onPress={uploadDocument}
                >
                    <UploadDocumentButtonText>
                        Adicionar Documento
                    </UploadDocumentButtonText>
                </UploadDocumentButton>
            </FormContainer>
            <DocumentsContainer>
                <Subtitle
                    content='Documentos Enviados'
                />
                <DocumentsList
                    data={documentImages}
                    //@ts-ignore
                    renderItem={({ item }: IDocument) => (
                        <DocumentCard
                            key={item.documentImage}
                            document={item.document}
                            documentImage={item.documentImage}
                            status={item.status}
                        />
                    )}
                />
            </DocumentsContainer>
        </>
    )
}