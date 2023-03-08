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
`
export const LogoContainer = styled.View`
align-items: center;
padding-top: ${RFValue(24)}px;
`

export const HeaderContainer = styled.View`
align-items: center;
padding: ${RFValue(24)}px;
padding-bottom: 0;
`

export const FormContainer = styled.View`
align-items: center;
padding: ${RFValue(24)}px;
`

export const LoginOptionsContainer = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
height: ${RFValue(40)}px;
padding: 0 ${RFValue(24)}px;
margin-top: ${RFValue(24)}px;
margin-bottom: ${RFValue(24)}px;
`

export const Styles = StyleSheet.create({
    headerNavigation: {
        marginBottom: RFValue(24)
    },
    text: {
        marginTop: RFValue(24),
        marginBottom: RFValue(24)
    },
    loginOptionsButtons: {
        width: '42%'
    },
    forgetPasswordButton: {
        fontSize: RFValue(14)
    },
    registerButton: {
        color: '#EB4335',
        fontWeight: '700',
        marginRight: -40,
        fontSize: RFValue(14)
    }
})

