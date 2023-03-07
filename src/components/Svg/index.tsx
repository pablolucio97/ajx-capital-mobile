import { SvgXml } from 'react-native-svg'

interface SvgProps {
    xml: string;
    width: string | number;
    height: string | number;
}

export function Svg({ xml, width, height }: SvgProps) {
    return (
        <SvgXml
            xml={xml}
            width={width}
            height={height}
        />
    )
}