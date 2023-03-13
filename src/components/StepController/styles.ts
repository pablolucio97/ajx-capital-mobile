import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { getScreenWidth } from 'utils/layout'
import { StyleSheet, TouchableOpacity } from 'react-native'

export const Container = styled.View`
width: ${getScreenWidth()}px;
height: ${RFValue(80)}px;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: ${({ theme }) => theme.colors.backgroundLight};
padding: 0 ${RFValue(24)}px;
`
export const Button = styled(TouchableOpacity).attrs({
    activeOpacity: .8
})`
flex-direction: row;
justify-content: center;
align-items: center;
`
export const ButtonText = styled.Text`
color: ${({ theme }) => theme.colors.primary};
font-size: ${RFValue(14)};
font-family: ${({ theme }) => theme.fonts.primary_500};
`

export const Styles = StyleSheet.create({
    textLeft:{
        marginLeft: RFValue(8)
    },
    textRight:{
        marginRight: RFValue(8)
    },
})