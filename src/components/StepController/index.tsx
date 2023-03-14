import { Container, Button, ButtonText, Styles } from './styles';
import { SvgXml } from 'react-native-svg'
import { leftArrow, rightArrow } from '../../assets/svgs';

interface StepControllerProps {
    previousAction: () => void;
    nextAction: () => void;
    disabledPreviousButton?: boolean;
    disabledNextButton?: boolean;
    isLastStep?: boolean;
}

export function StepController({
    previousAction,
    nextAction,
    disabledPreviousButton,
    disabledNextButton,
    isLastStep
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
            <Button
                onPress={nextAction}
                disabled={disabledNextButton}
            >
                {
                    isLastStep ?
                        <ButtonText>
                            Salvar
                        </ButtonText> :
                        <ButtonText
                            style={Styles.textRight}
                        >
                            Próximo
                        </ButtonText>

                }
                {
                    !isLastStep &&
                    <SvgXml
                        xml={rightArrow}
                    />
                }
            </Button>
        </Container >
    )
}