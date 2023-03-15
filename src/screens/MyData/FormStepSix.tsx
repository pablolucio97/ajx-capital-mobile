import { DocumentCard } from 'components/DocumentCard';
import { Subtitle } from 'components/Subtitle';
import { IDocument } from 'interfaces/mockedData'
import * as ImagePicker from 'expo-image-picker'
import { documents } from 'utils/mockedData'
import {
    DocumentsContainer,
    FormContainer,
    UploadDocumentButton,
    UploadDocumentButtonText
} from './styles';
import { useState } from 'react';
import useStateRef from 'react-usestateref'

export function FormStepSix() {

    const [, setImage, imageRef] = useStateRef('')
    const [documentsList, setDocumentsList] = useState<IDocument[]>(documents)

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })


        if (!result.canceled) {
            setImage(result.assets[0].uri)

            const newDocument = {
                document: 'CNH',
                status: 'Pendente',
                documentImage: imageRef.current
            }

            setDocumentsList([...documentsList, newDocument])
        }
    }

    return (
        <>
            <FormContainer>
                <UploadDocumentButton
                    activeOpacity={0.8}
                    onPress={pickImage}
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
                    documentsList?.map(item => (
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