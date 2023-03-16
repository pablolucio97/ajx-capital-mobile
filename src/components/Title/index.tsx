import { TextStyle } from 'react-native';
import { TitleEl } from './styles';

type TitleProps = {
    content: string;
    style: TextStyle;
}

export function Title({ content, style }: TitleProps) {
    return (
        <TitleEl
            //@ts-ignore
            style={style}
        >
            {content}
        </TitleEl>
    )
}