import { useNavigation } from '@react-navigation/native';
import { GoogleSignInButton } from 'components/GoogleSignInButton';
import { HeaderNavigation } from 'components/HeaderNavigation';
import { InputText } from 'components/InputText';
import { PrimaryButton } from 'components/PrimaryButton';
import { SecondaryButton } from 'components/SecondaryButton';
import { Svg } from 'components/Svg';
import { Text } from 'components/Text';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard } from 'react-native';
import { logo } from '../../assets/svgs';
import {
    Container,
    ContentContainer,
    FormContainer,
    HeaderContainer,
    LoginOptionsContainer,
    LogoContainer,
    Styles,
    TouchableContainer
} from './styles';

export function Login() {

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
            <StatusBar style="dark" />
            <HeaderContainer>
                <HeaderNavigation
                    title='Entrar'
                    style={Styles.headerNavigation}
                />
            </HeaderContainer>
            <TouchableContainer onPress={() => Keyboard.dismiss()}>
                <ContentContainer
                    showsVerticalScrollIndicator={false}
                >
                    <LogoContainer>
                        <Svg
                            width={170}
                            height={128}
                            xml={logo}
                        />
                    </LogoContainer>
                    <FormContainer>
                        <InputText
                            label='E-mail'
                            value={email}
                            onChangeText={setEmail}
                        />
                        <InputText
                            label='Senha'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <PrimaryButton
                            title='Entrar'
                        />
                        <Text
                            content='ou'
                            style={Styles.text}
                        />
                        <GoogleSignInButton
                        />
                    </FormContainer>
                    <LoginOptionsContainer>
                        <SecondaryButton
                            title='Esqueci a Senha'
                            textStyle={Styles.forgetPasswordButton}
                            style={Styles.loginOptionsButtons}
                        />
                        <SecondaryButton
                            title='Cadastre-se'
                            textStyle={Styles.registerButton}
                            style={Styles.loginOptionsButtons}
                            onPress={() => navigation.navigate('Cadastro' as never)}
                        />
                    </LoginOptionsContainer>
                </ContentContainer>
            </TouchableContainer>

        </Container>
    )
}