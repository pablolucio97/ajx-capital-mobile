import { TouchableOpacityProps } from 'react-native'
import { CSSProperties } from 'styled-components';
import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    contentColor?: string;
    textStyle?: CSSProperties;
}

export function SecondaryButton({
    contentColor,
    textStyle,
    title,
    ...rest
}: ButtonProps) {

    return (
        //@ts-ignore
        <Container
        activeOpacity={.8}
        {...rest}
        >
          {/* @ts-ignore */}
            <Title style={textStyle} contentColor={contentColor}>
                {title}
            </Title>
        </Container>
    )
}