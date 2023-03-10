import React from 'react';
import { Container, StatusContainer, StatusText, Title } from './styles';

interface FormTitleProgressProps {
    formTitle: string;
    progress: number;
}

export function FormTitleProgress({ formTitle, progress }: FormTitleProgressProps) {
    return (
        <Container>
            <StatusContainer>
                <StatusText>{progress}</StatusText>
            </StatusContainer>
            <Title>{formTitle}</Title>
        </Container>
    )
}