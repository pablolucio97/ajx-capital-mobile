import { Container, Button, ButtonText, Styles } from './styles';
import { SvgXml } from 'react-native-svg'
import { leftArrow, rightArrow } from '../../assets/svgs';

interface StepControllerProps {
    previousAction: () => void;
    save: () => void;
    nextAction: () => void;
}

export function StepController({
    previousAction,
    save,
    nextAction
}: StepControllerProps) {
    return (
        <Container>
            <Button
                onPress={previousAction}
            >
                <SvgXml
                    xml={leftArrow}
                />
                <ButtonText
                    style={Styles.textLeft}
                >
                    Anterior
                </ButtonText>
            </Button>
            <Button onPress={save}>
                <ButtonText>
                    Salvar
                </ButtonText>
            </Button>
            <Button
                onPress={nextAction}
            >
                <ButtonText
                    style={Styles.textRight}
                >
                    Próximo
                </ButtonText>
                <SvgXml
                    xml={rightArrow}
                />
            </Button>
        </Container>
    )
}