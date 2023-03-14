import { DocumentCard } from 'components/DocumentCard';
import { Subtitle } from 'components/Subtitle';
import { IDocument } from 'interfaces/mockedData'
import {
    DocumentsContainer,
    FormContainer,
    UploadDocumentButton,
    UploadDocumentButtonText
} from './styles';

interface FormStepSixProps {
    uploadDocument?: () => void;
    documentList?: IDocument[];
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
                {
                    documentList?.map(item => (
                        <DocumentCard
                            key={item.documentImage}
                            document={item.document}
                            documentImage={item.documentImage}
                            status={item.status}
                        />
                    ))
                }
            </DocumentsContainer>
        </>
    )
}