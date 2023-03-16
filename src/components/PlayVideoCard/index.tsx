import React from 'react';
import { Container, Text } from './styles';
import { SvgXml } from 'react-native-svg'
import { playVideoIcon } from '../../assets/svgs';

interface PlayVideoCardProps {
    content: string;
    onPress?: () => void;
}

export function PlayVideoCard({ content, onPress }: PlayVideoCardProps) {
    return (
        <Container
            onPress={onPress}
            activeOpacity={0.8}
        >
            <SvgXml
                xml={playVideoIcon}
            />
            <Text>{content}</Text>
        </Container>
    )
}