import styled from 'styled-components/native'
import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from 'themes/theme'

export const Container = styled.View`
width: 100%;
justify-content: center;
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

export const Style = StyleSheet.create({
    buttonTextStyle:{
        color: theme.colors.textDark,
        fontSize: RFValue(14),
        fontWeight: '300',
    },
    dropdownStyle:{
        backgroundColor: theme.colors.backgroundLight,
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: RFValue(10),
    },
    buttonStyle:{
        width: '100%',
        backgroundColor: theme.colors.backgroundLight,
        borderRadius: RFValue(10),
        borderWidth: 1,
        borderColor: theme.colors.background,
        marginBottom: RFValue(24),
    },
})