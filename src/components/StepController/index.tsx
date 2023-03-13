import { Container, Button, ButtonText, Styles } from './styles';
import { SvgXml } from 'react-native-svg'
import { leftArrow, rightArrow } from '../../assets/svgs';

interface StepControllerProps {
    previousAction: () => void;
    save: () => void;
    nextAction: () => void;
    disabledPreviousButton?: boolean;
    disabledNextButton?: boolean;
}

export function StepController({
    previousAction,
    save,
    nextAction,
    disabledPreviousButton,
    disabledNextButton
}: StepControllerProps) {
    return (
        <Container>
            <Button
                onPress={previousAction}
                disabled={disabledPreviousButton}
                style={disabledPreviousButton ? Styles.disabled : null}
            >
                {
                    !disabledPreviousButton &&
                    <SvgXml
                        xml={leftArrow}
                    />
                }
                <ButtonText
                    style={disabledPreviousButton ? Styles.disabled : Styles.textLeft}
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
                disabled={disabledNextButton}
            >
                <ButtonText
                    style={Styles.textRight}
                >
                    Próximo
                </ButtonText>
                {
                    !disabledNextButton &&
                    <SvgXml
                        xml={rightArrow}
                    />
                }
            </Button>
        </Container>
    )
}