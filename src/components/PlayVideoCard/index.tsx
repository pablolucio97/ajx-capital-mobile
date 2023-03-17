import React from 'react';
import { Container, Text } from './styles';
import { SvgXml } from 'react-native-svg'
import { playVideoIcon } from '../../assets/svgs';

interface PlayVideoCardProps {
    title: string;
    onPress?: () => void;
}

export function PlayVideoCard({ title, onPress }: PlayVideoCardProps) {
    return (
        <Container
            onPress={onPress}
            activeOpacity={0.8}
        >
            <SvgXml
                xml={playVideoIcon}
            />
            <Text>{title}</Text>
        </Container>
    )
}