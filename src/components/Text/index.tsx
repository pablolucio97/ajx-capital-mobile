import { TextProps } from 'react-native'
import { TextEl } from './styles';

interface ITextProps extends TextProps {
    content: string;
}

export function Text({ content }: ITextProps) {
    return (
        <TextEl>
            {content}
        </TextEl>
    )
}