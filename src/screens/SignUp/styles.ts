import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import { getScreenWidth } from 'utils/layout'

export const TouchableContainer = styled.TouchableWithoutFeedback`
`

export const Container = styled.View`
width: ${getScreenWidth()}px;
flex: 1;
background-color: ${({ theme }) => theme.colors.backgroundLight};
`

export const ContentContainer = styled.ScrollView`
padding-top: ${RFValue(24)}px;
`

export const LogoContainer = styled.View`
align-items: center;
`

export const CheckContainer = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
margin-bottom: ${RFValue(24)}px;
word-break: word;
`

export const CheckTextContainer = styled.View`
`

export const HeaderContainer = styled.View`
align-items: center;
padding: ${RFValue(24)}px;
padding-bottom: 0;
`

export const GoogleLoginContainer = styled.View`
padding: ${RFValue(24)}px ${RFValue(32)}px;
`

export const FormContainer = styled.View`
align-items: center;
padding: ${RFValue(24)}px;
`

export const Styles = StyleSheet.create({
    headerNavigation: {
        marginBottom: RFValue(24)
    },
    text: {
        marginTop: RFValue(8),
        marginBottom: RFValue(8),
        textAlign: 'center'
    },
    acceptTermsText: {
        color: '#3AC6F4',
        marginLeft: RFValue(4),
    },
    termsText: {
        marginLeft: RFValue(8)
    },
    termsTextFinal: {
        color: '#3AC6F4',
        marginTop: -24,
        marginLeft: '-42%',
        marginBottom: 24
    },
    registerButton: {
        marginBottom: RFValue(24)
    }
})

