import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import theme from 'themes/theme'
import { RFValue } from 'react-native-responsive-fontsize'
import { getScreenWidth } from 'utils/layout'

export const Container = styled.View`
width: ${getScreenWidth()}px;
flex: 1;
justify-content: center;
background-color: ${({ theme }) => theme.colors.backgroundLight};
`
export const ImageContainer = styled.View`
flex: 1;
`
export const LoginContainer = styled.ScrollView`
flex: .95;
background-color: ${({ theme }) => theme.colors.backgroundLight};
border-top-left-radius:  ${RFValue(20)}px;
border-top-right-radius:  ${RFValue(20)}px;
margin-top: -88px;
elevation: 8;
padding: ${RFValue(24)}px;
`

export const FormContainer = styled.View`
align-items: center;
padding-bottom: ${RFValue(40)}px;
`

export const Styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    text: {
        color: theme.colors.placeholder,
        textAlign: 'center',
        marginTop: RFValue(24),
        fontSize: RFValue(14)
    },
    buttons: {
        marginTop: RFValue(24)
    },
    registerButton: {
        marginTop: RFValue(24),
        marginBottom: RFValue(24)
    }
});