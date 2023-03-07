import { TextProps } from 'react-native'
import { SubtitleEl } from './styles';

interface SubtitleProps extends TextProps {
    content: string;
}

export function Subtitle({ content }: SubtitleProps) {
    return (
        <SubtitleEl>
            {content}
        </SubtitleEl>
    )
}