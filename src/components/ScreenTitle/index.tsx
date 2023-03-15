import React from 'react';
import { CloseButton, Container, LogoContainer, Title, TitleContainer } from './styles';
import { Svg } from 'components/Svg';
import { closeIcon, logo } from '../../assets/svgs'

interface ScreenTitleProps {
    pageTitle: string;
    onCloseScreen: () => void;
}

export function ScreenTitle({ pageTitle, onCloseScreen }: ScreenTitleProps) {
    return (
        <Container>
            <TitleContainer>
                <CloseButton
                    onPress={onCloseScreen}
                    activeOpacity={0.8}
                >
                    <Svg
                        xml={closeIcon}
                        width={24}
                        height={24}
                    />
                </CloseButton>
                <Title>{pageTitle}</Title>
            </TitleContainer>
            <LogoContainer>
                <Svg
                    xml={logo}
                    width={64}
                    height={54}
                />
            </LogoContainer>
        </Container>
    )
}