import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import theme from 'themes/theme'

export const Container = styled.View`
width: 100%;
height: 80px;
align-items: flex-start;
margin-bottom: ${props => props.theme.spacings[5]}px;
`

export const TextInputEl = styled.TextInput`
width: 100%;
height: ${RFValue(48)}px;
padding-left: ${props => props.theme.spacings[2]}px;
border-width: ${RFValue(1)}px;
border-color: #E6E6E6;
background-color: #F9F9F9;
border-radius: 10px;
font-family: ${props => props.theme.fonts.primary_400};
margin-top: ${props => props.theme.spacings[0]}px;
color: ${props => props.theme.colors.titleDark};
`

export const Label = styled.Text`
color: ${props => props.theme.colors.textDark};
margin-left: ${props => props.theme.spacings[2]}px;
margin-bottom: ${props => props.theme.spacings[0]}px;
font-size: ${RFValue(12)}px;
font-family: ${props => props.theme.fonts.primary_400};
`

export const FocusedStyle = {
    borderColor: theme.colors.primary
}