import { TextProps } from 'react-native'
import { TitleEl } from './styles';

interface TitleProps extends TextProps {
    content: string;
}

export function Title({ content }: TitleProps) {
    return (
        <TitleEl>
            {content}
        </TitleEl>
    )
}