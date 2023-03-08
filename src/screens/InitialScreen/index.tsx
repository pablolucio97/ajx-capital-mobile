import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from 'components/PrimaryButton';
import { Svg } from 'components/Svg';
import { Text } from 'components/Text';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from 'react-native';
import { logoWithText, xTechLogo } from '../../assets/svgs';
import {
    Container,
    FormContainer,
    ImageContainer,
    LoginContainer,
    Styles
} from './styles';

export function InitialScreen() {

    const navigation = useNavigation()
    const imagePath = '../../assets/images/loginBackground.png'

    return (
        <Container>
            <StatusBar style="light" />
            <ImageContainer>
                <ImageBackground
                    source={require(imagePath)}
                    resizeMode="cover"
                    style={Styles.image}
                />
            </ImageContainer>
            <LoginContainer
                showsVerticalScrollIndicator={false}
            >
                <FormContainer>
                    <Svg
                        height={96}
                        width={264}
                        xml={logoWithText}
                    />
                    <Text
                        content='Duis risus orci, lobortis a varius ac, 
                        efficitur sit amet metus.'
                        style={Styles.text}
                    />
                    <PrimaryButton
                        title='Entrar'
                        style={Styles.buttons}
                        onPress={() => navigation.navigate('Login' as never)}
                    />
                    <PrimaryButton
                        title='Cadastre-se'
                        bgColor='#E94739'
                        style={Styles.registerButton}
                    />
                    <Svg
                        width={48}
                        height={40}
                        xml={xTechLogo}
                    />
                </FormContainer>
            </LoginContainer>
        </Container>
    )
}

