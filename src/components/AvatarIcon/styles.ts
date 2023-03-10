import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'


export const Image = styled.Image`
width: ${RFValue(32)}px;
height: ${RFValue(32)}px;
border-radius: ${RFValue(16)}px;
`

export const Container = styled.View`
width: ${RFValue(88)}px;
height: ${RFValue(48)}px;
border-radius: ${RFValue(28)}px;
background-color: ${({theme}) => theme.colors.primary};
align-items: center;
justify-content: center;
`