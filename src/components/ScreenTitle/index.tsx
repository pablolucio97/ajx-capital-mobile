import React from 'react';
import { Container, LogoContainer, Title, TitleContainer } from './styles';
import { Svg } from 'components/Svg';
import { closeIcon, logo } from '../../assets/svgs'

interface ScreenTitleProps {
    pageTitle: string;
}

export function ScreenTitle({ pageTitle }: ScreenTitleProps) {
    return (
        <Container>
            <TitleContainer>
                <Svg
                    xml={closeIcon}
                    width={24}
                    height={24}
                />
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