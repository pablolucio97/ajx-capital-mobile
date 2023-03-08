import { TextProps } from 'react-native'
import { TextEl } from './styles';

interface ITextProps extends TextProps {
    content: string;
}

export function Text({ content, ...rest }: ITextProps) {
    return (
        //@ts-ignore
        <TextEl
            {...rest}
        >
            {content}
        </TextEl>
    )
}