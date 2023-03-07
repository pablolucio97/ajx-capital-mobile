import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import theme from 'themes/theme'

export const Container = styled.View`
width: 100%;
height: 80px;
align-items: flex-start;
margin-bottom: ${props => props.theme.spacings[5]}px;
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

export const InputMaskStyle = {
    width: '100%',
    borderColor: '#E6E6E6',
    borderWidth: RFValue(1),
    paddingLeft: RFValue(12),
    borderRadius: RFValue(10),
    backgroundColor: '#F9F9F9',
    color: '#000000',
    fontFamily: theme.fonts.primary_400,
    height: RFValue(48),
}
export const InputMaskFocusedStyle = {
    ...InputMaskStyle,
    borderColor: theme.colors.primary,
}