import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
min-width:${RFValue(80)}px;
min-height: ${RFValue(40)}px;
justify-content: center;
align-items: center;
background-color: ${({theme}) => theme.colors.primary};
border-radius: ${RFValue(20)}px;
padding: ${RFValue(10)}px;
margin: 0 ${RFValue(4)}px;
`

export const Text = styled.Text`
font-size: ${RFValue(12)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.backgroundLight};
`