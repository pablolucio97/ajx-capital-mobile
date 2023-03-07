import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    contentColor?: string;
}

export function SecondaryButton({
    contentColor,
    title,
    ...rest
}: ButtonProps) {

    return (
        //@ts-ignore
        <Container
            activeOpacity={.8}
            {...rest}
        >
            <Title contentColor={contentColor}>
                {title}
            </Title>
        </Container>
    )
}