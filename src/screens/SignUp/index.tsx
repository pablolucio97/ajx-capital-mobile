import { GoogleSignInButton } from 'components/GoogleSignInButton';
import { HeaderNavigation } from 'components/HeaderNavigation';
import { InputText } from 'components/InputText';
import { InputMaskText } from 'components/InputMaskText';
import { PrimaryButton } from 'components/PrimaryButton';
import { Svg } from 'components/Svg';
import { Text } from 'components/Text';
import { StatusBar } from 'expo-status-bar';
import { logo } from '../../assets/svgs';
import {
    Container,
    ContentContainer,
    FormContainer,
    GoogleLoginContainer,
    HeaderContainer,
    LogoContainer,
    Styles,
    TouchableContainer
} from './styles';

export function SignUp() {
    return (
        <Container>
            <StatusBar style="dark" />
            <HeaderContainer>
                <HeaderNavigation
                    title='Cadastre-se'
                    style={Styles.headerNavigation}
                />
            </HeaderContainer>
            <TouchableContainer>
                <ContentContainer
                    showsVerticalScrollIndicator={false}
                >
                    <LogoContainer>
                        <Svg
                            width={96}
                            height={72}
                            xml={logo}
                        />
                    </LogoContainer>
                    <GoogleLoginContainer>
                        <GoogleSignInButton />
                    </GoogleLoginContainer>
                    <Text
                        content='ou'
                        style={Styles.text}
                    />
                    <FormContainer>
                        <InputText
                            label='Nome Completo'
                        />
                       <InputMaskText
                            label='Data de nascimento'
                            type='date'
                            options={{
                                dateFormat: 'DD/MM/YYYY',
                              }}
                            mask='(99)99999-9999'
                            onChangeText={() => { }}
                            keyboardType='numeric'
                        />
                        <InputMaskText
                            label='Telefone'
                            mask='(99)99999-9999'
                            onChangeText={() => { }}
                            keyboardType='numeric'
                        />
                        <InputMaskText
                            label='CPF'
                            mask='999.999.999-99'
                            onChangeText={() => { }}
                            keyboardType='numeric'
                        />
                        <InputText
                            label='E-mail'
                        />
                        <InputText
                            label='Senha (Mínimo 6 caracteres)*'
                            secureTextEntry
                        />
                        <PrimaryButton
                            title='Cadastre-se'
                        />
                    </FormContainer>
                </ContentContainer>
            </TouchableContainer>
        </Container>
    )
}